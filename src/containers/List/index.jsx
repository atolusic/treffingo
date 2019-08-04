import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'

import CloseButton from '../../components/CloseButton'

import { ListWrapper } from './style'

function List({ closeList, theme }) {
  return (
    <ListWrapper>
      <CloseButton onClick={closeList} color={theme.colors.secondary} />
      toc
    </ListWrapper>
  )
}

List.propTypes = {
  closeList: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string,
      primary: PropTypes.string,
      secondary: PropTypes.string,
    }),
  }).isRequired,
}

export default withTheme(List)
