import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Input from '../../../components/Input'

function NewListForm() {
  const [inputValue, setInputValue] = useState('')

  return (
    <Input
      inputValue={inputValue}
      setInputValue={setInputValue}
    />
  )
}

export default NewListForm
