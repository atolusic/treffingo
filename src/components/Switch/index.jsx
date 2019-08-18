import React, { useState } from 'react'
import ReactSwitch from 'react-switch'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'

import SwitchIcon from './SwitchIcon'


function Switch({
  uncheckedIcon,
  checkedIcon,
  smallRadiusSwitch,
  theme,
}) {
  const [checked, setChecked] = useState(false)
  let customStylingProps = {}

  if (smallRadiusSwitch) {
    customStylingProps = {
      className: 'react-switch',
      id: 'small-radius-switch',
      handleDiameter: 23,
      offColor: theme.colors.secondary,
      onColor: theme.colors.primary,
      offHandleColor: theme.colors.white,
      onHandleColor: theme.colors.primary,
      height: 30,
      width: 60,
    }
  }

  return (
    <ReactSwitch
      checked={checked}
      onChange={_checked => setChecked(_checked)}
      uncheckedIcon={
        (
          <SwitchIcon>
            {uncheckedIcon}
          </SwitchIcon>
        )
      }
      checkedIcon={checkedIcon}
      aria-label="secret label"
      {...customStylingProps}
    />
  )
}

Switch.defaultProps = {
  uncheckedIcon: false,
  checkedIcon: false,
  smallRadiusSwitch: true,
  switchId: 'small-radius-switch',
}

Switch.propTypes = {
  uncheckedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  checkedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  smallRadiusSwitch: PropTypes.bool,
  switchId: PropTypes.string,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string,
      primary: PropTypes.string,
      secondary: PropTypes.string,
      blacky: PropTypes.string,
    }),
  }).isRequired,
}

export default withTheme(Switch)
