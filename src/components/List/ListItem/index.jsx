import React from 'react'
import PropTypes from 'prop-types'
import { useDrag } from 'react-dnd'

import { ListItemWrapper } from './style'

const ItemTypes = {
  LIST_ITEM: 'listItem',
}

function ListItem({ listItemData }) {
  const { task } = listItemData

  const [{ isDraging }, drag] = useDrag({
    item: { type: ItemTypes.LIST_ITEM, itemData: listItemData },
    collect: monitor => ({
      isDraging: !!monitor.isDragging(),
    }),
  })

  return (
    <ListItemWrapper ref={drag}>
      <p>{task}</p>
    </ListItemWrapper>
  )
}

ListItem.defaultProps = {

}

ListItem.propTypes = {

}

export default ListItem
