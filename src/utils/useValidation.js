import { useState } from 'react'
import { isEmpty } from 'lodash'

function useValidation(inputValue) {
  const [isValid, setIsValid] = useState(true)

  return {
    onE: () => {
      const checkIfInputIsEmpty = fn => val => fn(val)

      if (checkIfInputIsEmpty(isEmpty)(inputValue)) {
        setIsValid(false)
      } else {
        setIsValid(true)
      }
    },
    isValid,
  }
}

export default useValidation
