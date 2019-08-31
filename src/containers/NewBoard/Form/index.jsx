import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Input from '../../../components/Input'
import Button from '../../../components/Button'
import CloseButton from '../../../components/CloseButton'
import ErrorMessage from '../../../components/ErrorMessage'
import Spinner from '../../../components/Spinner'

import { addBoard } from '../../../actions/board'
import { Context } from '../../../context'
import useForm from '../../../utils/useForm'

import {
  NewBoardFormContent,
  FormHeader,
  FormMainContent,
  ButtonWrapper,
} from './style'

function NewBoardForm({ toggleFormClickHandler }) {
  const { state: { loading, boards }, dispatch } = useContext(Context)
  const {
    isValid,
    setValid,
    inputValue,
    onChange,
    onSubmit,
  } = useForm(dispatch, { fn: addBoard, params: [dispatch] })

  const errorMessagePositioning = {
    position: 'absolute',
    bottom: '75px',
  }

  return (
    <NewBoardFormContent>
      <FormHeader>
        <p>Creating a board</p>
        <CloseButton onClick={toggleFormClickHandler} />
      </FormHeader>
      <FormMainContent onSubmit={onSubmit}>
        <p>What shall we call the board?</p>
        <Input
          inputValue={inputValue}
          onChange={onChange}
          onBlur={() => setValid(inputValue)}
        />
        {!isValid && <ErrorMessage positioning={errorMessagePositioning} message="Oops! Looks like you forgot the name!" />}
        <ButtonWrapper>
          <Button onClick={toggleFormClickHandler} margin="0 5px 0 0" buttonContent="Cancel" />
          <Button
            type="submit"
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
