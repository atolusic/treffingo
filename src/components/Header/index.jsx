import React from 'react'

import Svg from '../Svg'
import Switch from '../Switch'

import { HeaderText, HeaderWrapper } from './style'

function Header() {
  return (
    <HeaderWrapper>
      <Svg svgName="exam" />
      <HeaderText>treffingo</HeaderText>
      <Switch
        uncheckedIcon={<Svg svgName="night" width="23" />}
      />
    </HeaderWrapper>
  )
}

export default Header
