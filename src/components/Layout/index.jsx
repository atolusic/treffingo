import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Container = styled.div(props => ({
  backgroundColor: props.backgroundColor,
  height: '100vh',
}))

function Layout({ children, backgroundColor }) {
  return (
    <Container backgroundColor={backgroundColor}>
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
