import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'
import { Transition } from 'react-transition-group'

import Button from '../../components/Button'
import List from '../List'

import { NewListWrapper } from './style'
import AnimateOpacity from '../../components/AnimateOpacity'
import NewListForm from './NewListForm'

const addListAdditionalStyle = {
  main: {
    width: '140px',
    height: '100px',
  },
  hover: {
    transform: 'scale(1.05)',
  },
}

function NewList({ theme }) {
  const [showList, setShowList] = useState(false)
  const [showButton, setShowButton] = useState(true)

  return (
    <NewListWrapper>
      <AnimateOpacity
        _in={showButton}
        onEntering={() => setShowList(false)}
        onExited={() => setShowList(true)}
      >
        <Button
          buttonText="Add a list"
          additionalStyle={addListAdditionalStyle.main}
          hover={addListAdditionalStyle.hover}
          onClick={() => setShowList(true)}
        />
      </AnimateOpacity>
      <AnimateOpacity
        _in={showList}
        onExited={() => setShowButton(true)}
        onEntering={() => setShowButton(false)}
      >
        <List closeList={() => setShowList(false)}>
          <NewListForm />
        </List>
      </AnimateOpacity>
    </NewListWrapper>
  )
}

NewList.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string,
      primary: PropTypes.string,
    }),
  }).isRequired,
}

export default withTheme(NewList)
