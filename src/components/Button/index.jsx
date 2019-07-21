import React from 'react'
import PropTypes from 'prop-types'

import { ButtonComponent } from './style'

function Button({
  buttonText,
  onClick,
  backgroundColor,
  color,
  margin,
}) {
  return (
    <ButtonComponent
      color={color}
      onClick={onClick}
      backgroundColor={backgroundColor}
      margin={margin}
    >
      {buttonText}
    </ButtonComponent>
  )
}

Button.defaultProps = {
  backgroundColor: '#ef9a9a',
  color: '#fff',
  margin: '0',
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
}

export default Button
