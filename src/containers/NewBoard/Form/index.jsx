import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

import Input from '../../../components/Input'
import Button from '../../../components/Button'

import {
  NewBoardFormContent,
  FormHeader,
  FormMainContent,
  ErrorMessage,
  ButtonsWrapper,
} from './style'

function NewBoardForm({ toggleFormClickHandler }) {
  const [inputValue, setInputValue] = useState('')
  const [errorObj, setError] = useState({
    isValid: true,
    errorMessage: 'Oops! Looks like you forgot the name!',
  })

  const onInputBlur = () => {
    const checkIfInputIsEmpty = fn => val => fn(val)

    if (checkIfInputIsEmpty(isEmpty)(inputValue)) {
      setError(s => ({ ...s, isValid: false }))
    } else {
      setError(s => ({ ...s, isValid: true }))
    }
  }

  return (
    <NewBoardFormContent>
      <FormHeader>
        <p>Creating a board</p>
        <button type="button" onClick={toggleFormClickHandler}>
          <i className="fas fa-times-circle" />
        </button>
      </FormHeader>
      <FormMainContent>
        <p>What shall we call the board?</p>
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          onBlur={onInputBlur}
        />
        {
          !errorObj.isValid && <ErrorMessage>{errorObj.errorMessage}</ErrorMessage>
        }
        <ButtonsWrapper>
          <Button margin="0 5px 0 0" buttonText="Cancel" />
          <Button buttonText="Create" color="#d50000" backgroundColor="#fff" />
        </ButtonsWrapper>
      </FormMainContent>
    </NewBoardFormContent>
  )
}

NewBoardForm.propTypes = {
  toggleFormClickHandler: PropTypes.func.isRequired,
}

export default NewBoardForm
