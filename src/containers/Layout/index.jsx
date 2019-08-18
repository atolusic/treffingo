import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Svg from '../../components/Svg'
import Switch from '../../components/Switch'
import Header from '../../components/Header'

import { Container, SwitchWrapper } from './style'

import { Context } from '../../Context'

function Layout({ children, backgroundColor }) {
  const { state, dispatch } = useContext(Context)

  return (
    <Container backgroundColor={'#030303'}>
      <SwitchWrapper>
        <Switch
          uncheckedIcon={<Svg svgName="night" width="23" />}
          checkedIcon={<Svg svgName="sun" width="23" />}
        />
      </SwitchWrapper>
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
