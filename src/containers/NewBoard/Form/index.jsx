import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import Input from '../../../components/Input'
import Button from '../../../components/Button'
import CloseButton from '../../../components/CloseButton'
import ErrorMessage from '../../../components/ErrorMessage'

import { addBoard } from '../../../actions/board'
import { Context } from '../../../Context'
import useValidation from '../../../utils/useValidation'

import {
  NewBoardFormContent,
  FormHeader,
  FormMainContent,
  ButtonWrapper,
} from './style'

function NewBoardForm({ toggleFormClickHandler }) {
  const [inputValue, setInputValue] = useState('')
  const { dispatch } = useContext(Context)
  const { isValid, onE } = useValidation(inputValue)

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
          onBlur={onE}
        />
        {!isValid && <ErrorMessage message="Oops! Looks like you forgot the name!" />}
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
