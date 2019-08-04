import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'
import { Transition } from 'react-transition-group'

import Button from '../../components/Button'
import List from '../List'

import { NewListWrapper, ListAnimationWrapper } from './style'

const addListAdditionalStyle = {
  main: {
    width: '10%',
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
      {showButton && (
        <Button
          buttonText="Add a list"
          additionalStyle={addListAdditionalStyle.main}
          hover={addListAdditionalStyle.hover}
          onClick={() => setShowList(true)}
        />
      )}
      <Transition
        in={showList}
        unmountOnExit
        onEntering={() => setShowButton(false)}
        onExiting={() => setShowButton(true)}
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
