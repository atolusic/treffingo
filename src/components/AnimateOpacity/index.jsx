import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

import { AnimationWrapper } from './style'

function AnimateOpacity({
  onEntering,
  onExited,
  _in,
  children,
  timeout,
}) {
  return (
    <Transition
      in={_in}
      unmountOnExit
      onExited={onExited}
      onEntering={onEntering}
      timeout={timeout}
    >
      {state => (
        <AnimationWrapper state={state}>
          {children}
        </AnimationWrapper>
      )}
    </Transition>
  )
}

AnimateOpacity.propTypes = {
  onEntering: PropTypes.func.isRequired,
  timeout: PropTypes.number.isRequired,
  onExited: PropTypes.func.isRequired,
  _in: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default AnimateOpacity
