import React, { useEffect, useContext } from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { Context } from '../../Context'

import { getBoardById } from '../../actions/board'
import NotFoundPage from '../../components/NotFoundPage'
import Spinner from '../../components/Spinner'

function BoardContent({ match, history }) {
  const { state: { selectedBoard, loading }, dispatch } = useContext(Context)
  const { boardId } = match.params

  useEffect(() => {
    const fetchBoard = async () => { dispatch(await getBoardById(boardId, dispatch)) }

    fetchBoard()
  }, [boardId, dispatch])

  let renderBoard = <Spinner />

  if (selectedBoard && !loading) {
    renderBoard = <p>{selectedBoard.name}</p>
  } else if (!loading && !selectedBoard) {
    renderBoard = <NotFoundPage notFoundText="Board not found." history={history} />
  }

  return (
    <div>
      {renderBoard}
    </div>
  )
}

BoardContent.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
}

export default BoardContent
