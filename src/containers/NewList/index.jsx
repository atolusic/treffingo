import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'
import { Transition } from 'react-transition-group'

import Button from '../../components/Button'
import List from '../List'

import { NewListWrapper, ListAnimationWrapper } from './style'

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
      <Transition
        in={showButton}
        unmountOnExit
        onExited={() => setShowList(true)}
        onEntering={() => setShowList(false)}
      >
        {state => (
          <ListAnimationWrapper state={state}>
            <Button
              buttonText="Add a list"
              additionalStyle={addListAdditionalStyle.main}
              hover={addListAdditionalStyle.hover}
              onClick={() => setShowList(true)}
            />
          </ListAnimationWrapper>
        )}
      </Transition>
      <Transition
        in={showList}
        unmountOnExit
        onExited={() => setShowButton(true)}
        onEntering={() => setShowButton(false)}
      >
        {state => (
          <ListAnimationWrapper state={state}>
            <List closeList={() => setShowList(false)} />
          </ListAnimationWrapper>
        )}
      </Transition>
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
