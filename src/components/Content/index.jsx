import React from 'react'
import { withTheme } from 'emotion-theming'
import PropTypes from 'prop-types'

import { ContentWrapper } from './style'
import NewBoard from '../../containers/NewBoard'
import Board from '../Board'

function Content({ theme }) {
  return (
    <ContentWrapper>
      <NewBoard />
      <Board
        textContent="nesta"
        overrideBoardContent={
          {
            backgroundColor: theme.colors.white,
            color: theme.colors.primary,
          }}
      />
    </ContentWrapper>
  )
}

Content.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string,
      primary: PropTypes.string,
    }),
  }).isRequired,
}

export default withTheme(Content)
