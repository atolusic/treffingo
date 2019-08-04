import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

import Input from '../../../components/Input'
import Button from '../../../components/Button'
import CloseButton from '../../../components/CloseButton'

import { addBoard } from '../../../actions/board'
import { Context } from '../../../Context'

import {
  NewBoardFormContent,
  FormHeader,
  FormMainContent,
  ErrorMessage,
  ButtonWrapper,
} from './style'

function NewBoardForm({ toggleFormClickHandler }) {
  const [inputValue, setInputValue] = useState('')
  const { dispatch } = useContext(Context)
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

  const onCreateClickHandler = () => {
    dispatch(addBoard(inputValue))

    setInputValue('')
  }

  return (
    <NewBoardFormContent>
      <FormHeader>
        <p>Creating a board</p>
        <CloseButton onClick={toggleFormClickHandler} />
      </FormHeader>
      <FormMainContent>
        <p>What shall we call the board?</p>
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          onBlur={onInputBlur}
        />
        <ErrorMessage>{!errorObj.isValid && errorObj.errorMessage}</ErrorMessage>
        <ButtonWrapper>
          <Button onClick={toggleFormClickHandler} margin="0 5px 0 0" buttonText="Cancel" />
          <Button onClick={onCreateClickHandler} buttonText="Create" color="#d50000" backgroundColor="#fff" />
        </ButtonWrapper>
      </FormMainContent>
    </NewBoardFormContent>
  )
}

NewBoardForm.propTypes = {
  toggleFormClickHandler: PropTypes.func.isRequired,
}

export default NewBoardForm
