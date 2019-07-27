import React, { useContext, useEffect } from 'react'
import { withTheme } from 'emotion-theming'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'

import NewBoard from '../NewBoard'
import Board from '../../components/Board'

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
    dispatch(getBoards())
  }, [dispatch])

  const onBoardClickHandler = boardId => history.push(`/b/${boardId}`)

  return (
    <ContentWrapper>
      <NewBoard />
      {
        boards.length ? boards.map(board => (
          <Board
            key={board.id}
            textContent={board.name}
            overrideBoardContent={overrideBoardContent}
            onClick={() => onBoardClickHandler(board.id)}
          />
        )) : null
      }
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
