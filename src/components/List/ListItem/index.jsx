import React from 'react'
import PropTypes from 'prop-types'

import { ListItemWrapper } from './style'

function ListItem({ listItemData: { task } }) {
  return (
    <ListItemWrapper>
      <p>{task}</p>
    </ListItemWrapper>
  )
}

ListItem.defaultProps = {

}

ListItem.propTypes = {

}

export default ListItem
