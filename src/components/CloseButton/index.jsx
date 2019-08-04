import React from 'react'
import PropTypes from 'prop-types'

import { CloseButtonWrapper } from './style'

function CloseButton({ onClick, color }) {
  return (
    <CloseButtonWrapper type="button" onClick={onClick} color={color}>
      <i className="fa fa-times-circle-o" />
    </CloseButtonWrapper>
  )
}

CloseButton.defaultProps = {
  color: '#fff',
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
}

export default CloseButton
