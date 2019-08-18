import React from 'react'
import PropTypes from 'prop-types'

import { SwitchIconWrapper } from './style'

function SwitchIcon({ children }) {
  return (
    <SwitchIconWrapper>
      {children}
    </SwitchIconWrapper>
  )
}

SwitchIcon.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default SwitchIcon
