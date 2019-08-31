import React from 'react'
import PropTypes from 'prop-types'

import { ButtonComponent } from './style'
import theme from '../../App.style'

function Button({
  buttonContent,
  onClick,
  backgroundColor,
  color,
  margin,
  hover,
  additionalStyle,
  iconClass,
  disabled,
  type,
}) {
  return (
    <ButtonComponent
      type={type}
      color={color}
      onClick={onClick}
      backgroundColor={backgroundColor}
      margin={margin}
      hover={hover}
      additionalStyle={additionalStyle}
      disabled={disabled}
    >
      {iconClass ? <i className={iconClass} /> : buttonContent}
    </ButtonComponent>
  )
}

Button.defaultProps = {
  disabled: false,
  type: 'button',
  onClick: () => {},
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
  buttonContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
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
