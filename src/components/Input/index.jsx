import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './style'

function Input({
  width,
  inputValue,
  setInputValue,
  onBlur,
  additionalStyle,
  placeholder,
}) {
  const onChange = (e, setValue) => {
    setValue(e.target.value)
  }

  return (
    <StyledInput
      width={width}
      value={inputValue}
      onChange={e => onChange(e, setInputValue)}
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
  setInputValue: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  additionalStyle: PropTypes.shape(),
  placeholder: PropTypes.string,
}

export default Input
