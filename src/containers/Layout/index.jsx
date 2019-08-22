import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'

import Svg from '../../components/Svg'
import Switch from '../../components/Switch'
import Header from '../../components/Header'

import { Container, SwitchWrapper } from './style'

import { Context } from '../../Context'
import { getTheme, toggleDarkMode } from '../../actions/layout'

function Layout({ children, backgroundColor, theme }) {
  const { layoutState, layoutDispatch } = useContext(Context)
  const { dark } = layoutState.theme
  // '#030303'

  return (
    <Container backgroundColor={dark ? theme.colors.blacky : backgroundColor}>
      <SwitchWrapper>
        <Switch
          uncheckedIcon={<Svg svgName="night" width="23" />}
          checkedIcon={<Svg svgName="sun" width="23" />}
          setTheme={() => layoutDispatch(toggleDarkMode())}
          checked={dark}
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
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string,
      primary: PropTypes.string,
      blacky: PropTypes.string,
    }),
  }).isRequired,
}

export default withTheme(Layout)
