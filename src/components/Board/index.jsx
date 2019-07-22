import React from 'react'
import PropTypes from 'prop-types'

import { BoardContent } from './style'

function Board({ onClick, textContent, overrideBoardContent }) {
  return (
    <BoardContent overrideBoardContent={overrideBoardContent} onClick={onClick}>
      {textContent}
    </BoardContent>
  )
}

Board.defaultProps = {
  overrideBoardContent: {},
}

Board.propTypes = {
  onClick: PropTypes.func.isRequired,
  textContent: PropTypes.string.isRequired,
  overrideBoardContent: PropTypes.shape({}),
}

export default Board
