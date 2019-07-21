import { useState } from 'react'
import { isEmpty } from 'lodash'

export default function useValidation(inputValue) {
  const [isValid, setIsValid] = useState(false)

  const checkIfInputIsEmpty = fn => val => fn(val)

  if (checkIfInputIsEmpty(isEmpty)(inputValue)) {
    setIsValid(false)
  } else {
    setIsValid(true)
  }

  return isValid
}
