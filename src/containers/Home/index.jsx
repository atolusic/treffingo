import React, { useContext, useEffect } from 'react'
import { withTheme } from 'emotion-theming'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'

import NewBoard from '../NewBoard'
import Board from '../../components/Board'
import Spinner from '../../components/Spinner'

import { Context } from '../../Context'
import { getBoards } from '../../actions/board'

import { ContentWrapper } from './style'

function Home({ theme, history }) {
  const { state: { boards }, dispatch } = useContext(Context)

  const overrideBoardContent = {
    backgroundColor: theme.colors.white,
    color: theme.colors.primary,
  }

  useEffect(() => {
    const fetchBoards = async () => { dispatch(await getBoards()) }

    fetchBoards()
  }, [dispatch])

  const onBoardClickHandler = boardId => history.push(`/b/${boardId}`)

  let renderBoards = <Spinner />

  if (boards) {
    renderBoards = boards.map(board => (
      <Board
        key={board.id}
        textContent={board.name}
        overrideBoardContent={overrideBoardContent}
        onClick={() => onBoardClickHandler(board.id)}
      />
    ))
  }

  return (
    <ContentWrapper>
      <NewBoard />
      {renderBoards}
    </ContentWrapper>
  )
}

Home.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string,
      primary: PropTypes.string,
    }),
  }).isRequired,
}

export default withTheme(Home)
