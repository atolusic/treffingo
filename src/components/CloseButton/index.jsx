import React from 'react'
import PropTypes from 'prop-types'

import { CloseButtonWrapper } from './style'

function CloseButton({ onClick }) {
  return (
    <CloseButtonWrapper type="button" onClick={onClick}>
      <i className="fas fa-times-circle" />
    </CloseButtonWrapper>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default CloseButton
