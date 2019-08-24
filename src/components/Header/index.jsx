import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../Svg'

import { HeaderText, HeaderWrapper } from './style'

function Header({ titleColor }) {
  return (
    <HeaderWrapper>
      <Svg svgName="exam" />
      <HeaderText titleColor={titleColor}>treffingo</HeaderText>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  titleColor: PropTypes.string.isRequired,
}

export default Header
