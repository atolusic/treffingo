import styled from '@emotion/styled'

// eslint-disable-next-line
export const AnimationWrapper = styled.div`
  transition: opacity .5s;
  opacity: ${({ state }) => {
    switch (state) {
      case 'entering':
        return '0'
      case 'entered':
        return '1'
      case 'exiting':
        return '1'
      default:
        return '0'
    }
  }}
`
