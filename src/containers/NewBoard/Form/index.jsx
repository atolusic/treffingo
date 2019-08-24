import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import Input from '../../../components/Input'
import Button from '../../../components/Button'
import CloseButton from '../../../components/CloseButton'
import ErrorMessage from '../../../components/ErrorMessage'
import Spinner from '../../../components/Spinner'

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
  const { state: { loading, boards }, dispatch } = useContext(Context)
  const { isValid, onE } = useValidation(inputValue)

  const onCreateClickHandler = async () => {
    dispatch(await addBoard(inputValue, dispatch))

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
          <Button onClick={toggleFormClickHandler} margin="0 5px 0 0" buttonContent="Cancel" />
          <Button
            onClick={onCreateClickHandler}
            buttonContent={
              loading && boards
                ? <Spinner fontSize="3px" top="1px" left="25px" />
                : 'Create'
            }
            color="#d50000"
            disabled={(loading && !!boards) || !inputValue}
            backgroundColor="#fff"
          />
        </ButtonWrapper>
      </FormMainContent>
    </NewBoardFormContent>
  )
}

NewBoardForm.propTypes = {
  toggleFormClickHandler: PropTypes.func.isRequired,
}

export default NewBoardForm
