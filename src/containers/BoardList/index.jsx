import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'
import { useDrop } from 'react-dnd'

import List from '../../components/List'
import Input from '../../components/Input'
import ListItem from '../../components/List/ListItem'

import { BoardListContent, Form, ListName } from './style'
import useForm from '../../utils/useForm'

import { Context } from '../../context'
import { addListItem, dragListItem } from '../../actions/board'

function BoardList({ listData: { name, id, items }, theme }) {
  const { dispatch } = useContext(Context)
  const {
    inputValue,
    onChange,
    onSubmit,
  } = useForm(dispatch, { fn: addListItem, params: [id] })

  const [, drop] = useDrop({
    accept: 'listItem',
    drop: (item) => {
      dispatch(dragListItem(id, item.itemData))
    },
  })

  return (
    <List overrideListStyle={{ alignSelf: 'flex-start' }}>
      <BoardListContent>
        <ListName>{name}</ListName>
        <Form onSubmit={onSubmit}>
          <Input
            inputValue={inputValue}
            additionalStyle={{ ...theme.listInput, width: '95%' }}
            onChange={onChange}
          />
        </Form>
        <div style={{ width: '95%', margin: '0 auto' }} ref={drop}>
          {items.map(item => <ListItem key={item.id} listItemData={item} />)}
        </div>
      </BoardListContent>
    </List>
  )
}

BoardList.propTypes = {
  listData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    items: PropTypes.shape([]).isRequired,
  }).isRequired,
  theme: PropTypes.shape({
    listInput: PropTypes.shape({}),
  }).isRequired,
}

export default withTheme(BoardList)
