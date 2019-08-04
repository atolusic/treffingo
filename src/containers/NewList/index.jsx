import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'

import Button from '../../components/Button'
import List from '../List'

import { NewListWrapper } from './style'

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
  const [isListOpened, toggleList] = useState(false)

  const onAddListClickHandler = () => toggleList((prev) => {
    if (prev) {
      addListAdditionalStyle.main.opacity = '0'
    } else {
      addListAdditionalStyle.main.opacity = '1'
    }

    return !prev
  })

  return (
    <NewListWrapper>
      {
        isListOpened
          ? <List />
          : (
            <Button
              buttonText="Add a list"
              additionalStyle={addListAdditionalStyle.main}
              hover={addListAdditionalStyle.hover}
              onClick={onAddListClickHandler}
            />
          )
      }
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
