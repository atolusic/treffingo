import React from 'react'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'

import Button from '../Button'

import { NotFoundWrapper } from './style'

function NotFoundPage({ history, notFoundText }) {
  return (
    <NotFoundWrapper>
      404
      <p>{notFoundText}</p>
      <Button
        buttonText="Take me back to homepage"
        additionalStyle={{ width: '30%' }}
        onClick={() => history.push('/')}
      />
    </NotFoundWrapper>
  )
}

NotFoundPage.defaultProps = {
  notFoundText: 'We cant\'t find page you\'re looking for.',
}

NotFoundPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  notFoundText: PropTypes.string,
}

export default NotFoundPage
