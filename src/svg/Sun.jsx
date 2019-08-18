import React from 'react'
import PropTypes from 'prop-types'

function Exam({ height, width }) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 420 420"
      style={{ enableBackground: 'new 0 0 420 420' }}
      xmlSpace="preserve"
      height={height}
      width={width}
    >
      <g>
        <polygon
          style={{ fill: '#F5C525' }}
          points="420,210 375.774,247.857 399.238,301.145 342.926,315.986 340.945,374.184 283.764,363.211
          256.724,414.779 210,380 163.276,414.779 136.236,363.211 79.055,374.184 77.073,315.986 20.762,301.144 44.226,247.858 0,210
          44.226,172.143 20.762,118.855 77.074,104.014 79.055,45.816 136.236,56.789 163.276,5.221 210,40 256.723,5.221 283.764,56.789
          340.945,45.816 342.927,104.014 399.238,118.856 375.774,172.142"
        />
        <circle style={{ fill: '#F8A805' }} cx="210" cy="210" r="140" />
      </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  )
}

Exam.defaultProps = {
  height: '100',
  width: '100',
}

Exam.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
}

export default Exam
