import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'

import CloseButton from '../../components/CloseButton'

import { ListWrapper } from './style'

function List({ closeList, theme, children }) {
  return (
    <ListWrapper>
      <CloseButton onClick={closeList} color={theme.colors.primary} />
      {children}
    </ListWrapper>
  )
}

List.propTypes = {
  closeList: PropTypes.func.isRequired,
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
