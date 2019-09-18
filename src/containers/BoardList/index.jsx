import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'

import List from '../../components/List'
import Input from '../../components/Input'

import { BoardListContent, Form } from './style'
import useForm from '../../utils/useForm'

import { Context } from '../../context'
import { addListItem } from '../../actions/board'

function BoardList({ listData: { name, id, items }, theme }) {
  const { dispatch } = useContext(Context)
  const {
    inputValue,
    onChange,
    onSubmit,
  } = useForm(dispatch, { fn: addListItem, params: [id] })

  return (
    <List>
      <BoardListContent>
        <p>{name}</p>
        <Form onSubmit={onSubmit}>
          <Input
            inputValue={inputValue}
            additionalStyle={{ ...theme.listInput, width: '95%' }}
            onChange={onChange}
          />
        </Form>
        {items.map(item => <h2 key={item.id}>{item.task}</h2>)}
      </BoardListContent>
    </List>
  )
}

BoardList.propTypes = {
  listData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  theme: PropTypes.shape({
    listInput: PropTypes.shape({}),
  }).isRequired,
}

export default withTheme(BoardList)
