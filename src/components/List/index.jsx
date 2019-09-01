import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'

import CloseButton from '../CloseButton'

import { ListWrapper } from './style'

function List({ closeList, theme, children }) {
  return (
    <ListWrapper>
      {closeList && <CloseButton onClick={closeList} color={theme.colors.primary} />}
      {children}
    </ListWrapper>
  )
}

List.defaultProps = {
  closeList: null,
}

List.propTypes = {
  closeList: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      primary: PropTypes.string,
    }),
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default withTheme(List)
