import React from 'react'
import PropTypes from 'prop-types'

import { ButtonComponent } from './style'
import theme from '../../App.style'

function Button({
  buttonText,
  onClick,
  backgroundColor,
  color,
  margin,
  hover,
  additionalStyle,
  iconClass,
}) {
  return (
    <ButtonComponent
      color={color}
      onClick={onClick}
      backgroundColor={backgroundColor}
      margin={margin}
      hover={hover}
      additionalStyle={additionalStyle}
    >
      {iconClass ? <i className={iconClass} /> : buttonText}
    </ButtonComponent>
  )
}

Button.defaultProps = {
  iconClass: '',
  backgroundColor: theme.colors.secondary,
  additionalStyle: {},
  color: theme.colors.white,
  margin: '0',
  hover: {
    backgroundColor: theme.colors.white,
    color: theme.colors.secondary,
  },
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  iconClass: PropTypes.string,
  margin: PropTypes.string,
  additionalStyle: PropTypes.shape({}),
  hover: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
}

export default Button
