import React from 'react'

import Svg from '../Svg'

import { HeaderText, HeaderWrapper } from './style'

function Header() {
  return (
    <HeaderWrapper>
      <Svg svgName="exam" />
      <HeaderText>treffingo</HeaderText>
    </HeaderWrapper>
  )
}

export default Header
