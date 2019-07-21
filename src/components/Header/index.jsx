import React from 'react'

import { HeaderText, HeaderWrapper } from './style'
import Svg from '../Svg'

function Header() {
  return (
    <HeaderWrapper>
      <Svg svgName="exam" />
      <HeaderText>treffingo</HeaderText>
    </HeaderWrapper>
  )
}

export default Header
