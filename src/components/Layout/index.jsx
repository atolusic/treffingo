import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import { Container } from './style'

function Layout({ children, backgroundColor }) {
  return (
    <Container backgroundColor={backgroundColor}>
      <Header />
      {children}
    </Container>
  )
}

Layout.defaultProps = {
  backgroundColor: '#F0F1F2',
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  backgroundColor: PropTypes.string,
}

export default Layout
