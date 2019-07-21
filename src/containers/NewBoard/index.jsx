import React, { useState } from 'react'

import { NewBoardContent } from './style'
import NewBoardButton from './Button'
import NewBoardForm from './Form'

function NewBoard() {
  const [isFormOpened, toggleForm] = useState(false)

  const toggleFormClickHandler = () => {
    toggleForm(prevState => !prevState)
  }

  return (
    <NewBoardContent>
      {
        !isFormOpened
          ? <NewBoardForm toggleFormClickHandler={toggleFormClickHandler} />
          : <NewBoardButton toggleFormClickHandler={toggleFormClickHandler} />
      }
    </NewBoardContent>
  )
}

export default NewBoard
