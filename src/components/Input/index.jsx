import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './style'

function Input({
  width,
  inputValue,
  onChange,
  onBlur,
  additionalStyle,
  placeholder,
}) {
  return (
    <StyledInput
      width={width}
      value={inputValue}
      onChange={onChange}
      onBlur={onBlur}
      additionalStyle={additionalStyle}
      placeholder={placeholder}
    />
  )
}

Input.defaultProps = {
  width: '90%',
  onBlur: () => {},
  additionalStyle: {},
  placeholder: '',
}

Input.propTypes = {
  width: PropTypes.string,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  additionalStyle: PropTypes.shape(),
  placeholder: PropTypes.string,
}

export default Input
