import React from 'react'
import ReactSwitch from 'react-switch'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'

import SwitchIcon from './SwitchIcon'

function Switch({
  uncheckedIcon,
  checkedIcon,
  smallRadiusSwitch,
  theme,
  setTheme,
  checked,
}) {
  let customStylingProps = {}

  if (smallRadiusSwitch) {
    customStylingProps = {
      className: 'react-switch',
      id: 'small-radius-switch',
      handleDiameter: 23,
      offColor: theme.colors.white,
      onColor: theme.colors.white,
      offHandleColor: theme.colors.secondary,
      onHandleColor: theme.colors.secondary,
      height: 30,
      width: 60,
    }
  }

  return (
    <ReactSwitch
      checked={checked}
      onChange={() => setTheme()}
      uncheckedIcon={
        (
          <SwitchIcon>
            {uncheckedIcon}
          </SwitchIcon>
        )
      }
      checkedIcon={(
        <SwitchIcon>
          {checkedIcon}
        </SwitchIcon>
      )}
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
  uncheckedIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]),
  checkedIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]),
  setTheme: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
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
