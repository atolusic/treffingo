import React, { useState } from 'react'
import ReactSwitch from 'react-switch'
import PropTypes from 'prop-types'

function Switch({ uncheckedIcon, checkedIcon, materialDesignStyle }) {
  const [checked, setChecked] = useState(false)
  let customStylingProps = {}

  if (materialDesignStyle) {
    customStylingProps = {
      className: 'react-switch',
      id: 'material-switch',
      boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.6)',
      activeBoxShadow: '0px 0px 1px 10px rgba(0, 0, 0, 0.2)',
      onColor: '#86d3ff',
      onHandleColor: '#2693e6',
      handleDiameter: 30,
      height: 20,
      width: 48,
    }
  }

  return (
    <ReactSwitch
      checked={checked}
      onChange={_checked => setChecked(_checked)}
      uncheckedIcon={uncheckedIcon}
      checkedIcon={checkedIcon}
      aria-label="secret label"
      {...customStylingProps}
    />
  )
}

Switch.defaultProps = {
  uncheckedIcon: false,
  checkedIcon: false,
  materialDesignStyle: true,
}

Switch.propTypes = {
  uncheckedIcon: PropTypes.bool,
  checkedIcon: PropTypes.bool,
  materialDesignStyle: PropTypes.bool,
}

export default Switch
