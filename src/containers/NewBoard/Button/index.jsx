import React from 'react'
import PropTypes from 'prop-types'

import { NewBoardButtonContent } from './style'

function NewBoardButton({ toggleFormClickHandler }) {
  return (
    <NewBoardButtonContent onClick={toggleFormClickHandler}>
      Create a new board...
    </NewBoardButtonContent>
  )
}

NewBoardButton.propTypes = {
  toggleFormClickHandler: PropTypes.func.isRequired,
}

export default NewBoardButton
