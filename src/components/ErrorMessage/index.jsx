import React from 'react'
import PropTypes from 'prop-types'

import { ErrorMessageWrapper } from './style'

function ErrorMessage({ message, positioning }) {
  return <ErrorMessageWrapper positioning={positioning}>{message}</ErrorMessageWrapper>
}

ErrorMessage.defaultProps = {
  positioning: {},
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  positioning: PropTypes.shape(),
}

export default ErrorMessage
