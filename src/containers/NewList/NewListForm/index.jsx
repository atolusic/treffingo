import React, { useContext } from 'react'
// import PropTypes from 'prop-types'

import ErrorMessage from '../../../components/ErrorMessage'
import Input from '../../../components/Input'

import { Context } from '../../../context'
import { addBoardList } from '../../../actions/board'

import useForm from '../../../utils/useForm'

import { NewListFormWrapper } from './style'

const newListFormInputStyle = {
  boxShadow: '0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23)',
  marginBottom: '30px',
  width: '85%',
  paddingLeft: '10px',
}

const errorMessagePositioning = {
  position: 'absolute',
  bottom: '10px',
}

function NewListForm() {
  const { dispatch, state: { selectedBoard } } = useContext(Context)
  const {
    isValid,
    setValid,
    inputValue,
    onChange,
    onSubmit,
  } = useForm(dispatch, { fn: addBoardList, params: [selectedBoard.id] })

  return (
    <NewListFormWrapper onSubmit={onSubmit}>
      <Input
        inputValue={inputValue}
        onChange={onChange}
        additionalStyle={newListFormInputStyle}
        placeholder="add a list"
        onBlur={() => setValid(inputValue)}
      />
      {!isValid && <ErrorMessage message="Give me a name!" positioning={errorMessagePositioning} />}
    </NewListFormWrapper>
  )
}

export default NewListForm
