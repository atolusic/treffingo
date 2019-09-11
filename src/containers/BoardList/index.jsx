import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'

import List from '../../components/List'
import Input from '../../components/Input'

import { ListItemContent } from './style'

function ListItem({ listData, theme }) {
  return (
    <List>
      <ListItemContent>
        <p>kurcic</p>
        <Input additionalStyle={theme.listInput} />
      </ListItemContent>
    </List>
  )
}

export default withTheme(ListItem)
