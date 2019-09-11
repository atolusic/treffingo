import React, { useState } from 'react'

import Button from '../../components/Button'
import List from '../../components/List'

import { NewListWrapper } from './style'
import AnimateOpacity from '../../components/AnimateOpacity'
import NewListForm from './NewListForm'

const addListAdditionalStyle = {
  main: {
    width: '200px',
    maxHeight: '300px',
  },
  hover: {
    transform: 'scale(1.05)',
  },
}

function NewList() {
  const [showList, setShowList] = useState(false)
  const [showButton, setShowButton] = useState(true)

  return (
    <NewListWrapper>
      <AnimateOpacity
        _in={showButton}
        onEntering={() => setShowList(false)}
        onExited={() => setShowList(true)}
        timeout={50}
      >
        <Button
          buttonContent="Add a list"
          additionalStyle={addListAdditionalStyle.main}
          hover={addListAdditionalStyle.hover}
          onClick={() => setShowList(true)}
        />
      </AnimateOpacity>
      <AnimateOpacity
        _in={showList}
        onExited={() => setShowButton(true)}
        onEntering={() => setShowButton(false)}
        timeout={50}
      >
        <List overrideListStyle={{ width: '300px' }} closeList={() => setShowList(false)}>
          <NewListForm />
        </List>
      </AnimateOpacity>
    </NewListWrapper>
  )
}

export default NewList
