import React from 'react'
import PropTypes from 'prop-types'

import Exam from '../../svg/Exam'
import Ecommerce from '../../svg/Ecommerce'
import Sun from '../../svg/Sun'
import Night from '../../svg/Night'

const svgMap = {
  exam: 'exam',
  ecommerce: 'ecommerce',
  sun: 'sun',
  night: 'night',
}

function Svg({ svgName, width }) {
  switch (svgName) {
    case svgMap.exam:
      return <Exam width={width} />
    case svgMap.ecommerce:
      return <Ecommerce />
    case svgMap.sun:
      return <Sun width={width} />
    case svgMap.night:
      return <Night width={width} />
    default:
      return `Svg with ${svgName} does not exist.`
  }
}

Svg.propTypes = {
  svgName: PropTypes.string.isRequired,
  width: PropTypes.string,
}

export default Svg
