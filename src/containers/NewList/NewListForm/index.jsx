import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Input from '../../../components/Input'

import useValidation from '../../../utils/useValidation'

const newListFormInputStyle = {
  boxShadow: '0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23)',
  marginBottom: '25px',
  paddingLeft: '10px',
}

function NewListForm() {
  const [inputValue, setInputValue] = useState('')
  const { isValid, onE } = useValidation(true)

  return (
    <Input
      inputValue={inputValue}
      setInputValue={setInputValue}
      additionalStyle={newListFormInputStyle}
      placeholder="add a list"
      onBlur={onE}
    />
  )
}

export default NewListForm
