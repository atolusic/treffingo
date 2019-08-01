import React from 'react'
import PropTypes from 'prop-types'

import StyledSpinner from './style'

function Spinner({ fontSize, top, left }) {
  return <StyledSpinner fontSize={fontSize} top={top} left={left} />
}

Spinner.defaultProps = {
  fontSize: '10px',
  top: '65px',
  left: '100px',
}

Spinner.propTypes = {
  fontSize: PropTypes.string,
  top: PropTypes.string,
  left: PropTypes.string,
}

export default Spinner
