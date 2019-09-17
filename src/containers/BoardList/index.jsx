import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'

import List from '../../components/List'
import Input from '../../components/Input'

import { ListItemContent } from './style'

import { addListItem } from '../../actions/board'

function ListItem({ listData: { name, id }, theme }) {
  return (
    <List>
      <ListItemContent>
        <p>{name}</p>
        <Input additionalStyle={theme.listInput} />
      </ListItemContent>
    </List>
  )
}

ListItem.propTypes = {
  listData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  theme: PropTypes.shape({
    listInput: PropTypes.shape({}),
  }).isRequired,
}

export default withTheme(ListItem)
