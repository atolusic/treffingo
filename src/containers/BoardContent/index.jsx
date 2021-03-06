import React, { useEffect, useContext } from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import PropTypes from 'prop-types'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import { Context } from '../../context'

import { getBoardById } from '../../actions/board'
import NotFoundPage from '../../components/NotFoundPage'
import Spinner from '../../components/Spinner'
import Button from '../../components/Button'
import NewList from '../NewList'
import BoardList from '../BoardList'

import { BoardContentHeader, BoardContentWrapper, BoardContentMain } from './style'

function BoardContent({ match, history }) {
  const {
    state: {
      selectedBoard,
      loading,
      boardNotFound,
    },
    dispatch,
  } = useContext(Context)
  const { boardId } = match.params

  useEffect(() => {
    const fetchBoard = async () => { dispatch(await getBoardById(boardId, dispatch)) }

    fetchBoard()
  }, [boardId, dispatch])

  let renderBoard = <Spinner fontSize="5px" top="1px" left="70px" />

  // TODO: fix this
  if (selectedBoard && !loading) {
    renderBoard = <p>{selectedBoard.name}</p>
  } else if (!loading && !selectedBoard && boardNotFound) {
    renderBoard = <NotFoundPage notFoundText="Board not found." history={history} />
  }

  return (
    <BoardContentWrapper>
      <BoardContentHeader>
        <Button
          iconClass="fas fa-arrow-left"
          buttonContent="Take me back to homepage"
          additionalStyle={{ width: '40px' }}
          onClick={() => history.push('/')}
        />
        {renderBoard}
      </BoardContentHeader>
      {selectedBoard && !loading ? <BoardMain selectedBoard={selectedBoard} /> : null}
    </BoardContentWrapper>
  )
}

BoardContent.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
}

function BoardMain({ selectedBoard }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <BoardContentMain>
        {selectedBoard.lists.map(listData => (
          <BoardList
            key={listData.id}
            listData={listData}
          />
        ))}
        <NewList />
      </BoardContentMain>
    </DndProvider>
  )
}

BoardMain.propTypes = {
  selectedBoard: PropTypes.shape({
    lists: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
}

export default BoardContent
