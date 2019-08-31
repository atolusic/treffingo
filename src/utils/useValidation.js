import { useState } from 'react'
import { isEmpty } from 'lodash'

function useValidation(fn = isEmpty) {
  const [isValid, setIsValid] = useState(true)
  const setValid = f => val => setIsValid(!f(val))

  return {
    setValid: val => setValid(fn)(val),
    isValid,
  }
}

export default useValidation
