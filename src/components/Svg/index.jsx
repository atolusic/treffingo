import React from 'react'
import PropTypes from 'prop-types'

import Exam from '../../svg/Exam'
import Ecommerce from '../../svg/Ecommerce'

const svgMap = {
  exam: 'exam',
  ecommerce: 'ecommerce',
}

function Svg({ svgName, width }) {
  switch (svgName) {
    case svgMap.exam:
      return <Exam width={width} />
    case svgMap.ecommerce:
      return <Ecommerce />
    default:
      return `Svg with ${svgName} does not exist.`
  }
}

Svg.propTypes = {
  svgName: PropTypes.string.isRequired,
  width: PropTypes.string,
}

export default Svg
