import { useState } from 'react'

import useValidation from './useValidation'

function useForm(dispatch, { fn, params = [] }) {
  const [inputValue, setInputValue] = useState('')
  const { isValid, setValid } = useValidation()

  const onSubmit = async (e) => {
    e.preventDefault()
    dispatch(await fn(inputValue, ...params))
    setInputValue('')
  }

  const onChange = (e) => {
    const val = e.target.value
    if (val) { setValid(val) }
    setInputValue(val)
  }

  return {
    isValid,
    setValid,
    inputValue,
    setInputValue,
    onChange,
    onSubmit,
  }
}

export default useForm
