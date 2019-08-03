import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'

import Button from '../../components/Button'

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
  return (
    <Button
      buttonText="Add a list"
      additionalStyle={addListAdditionalStyle.main}
      hover={addListAdditionalStyle.hover}
    />
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
