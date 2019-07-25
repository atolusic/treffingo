import React, { useContext, useEffect } from 'react'
import { withTheme } from 'emotion-theming'
import PropTypes from 'prop-types'

import NewBoard from '../NewBoard'
import Board from '../../components/Board'

import { Context } from '../../Context'
import { getBoards } from '../../actions/board'

import { ContentWrapper } from './style'

function Home({ theme }) {
  const { state: { boards }, dispatch } = useContext(Context)

  const overrideBoardContent = {
    backgroundColor: theme.colors.white,
    color: theme.colors.primary,
  }

  useEffect(() => {
    dispatch(getBoards())
  }, [])

  return (
    <ContentWrapper>
      <NewBoard />
      {
        boards.length ? boards.map(board => (
          <Board
            key={board.id}
            textContent={board.name}
            overrideBoardContent={overrideBoardContent}
            onClick={() => console.log('On Board Click')}
          />
        )) : null
      }
    </ContentWrapper>
  )
}

Home.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string,
      primary: PropTypes.string,
    }),
  }).isRequired,
}

export default withTheme(Home)
