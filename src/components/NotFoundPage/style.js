import styled from '@emotion/styled'

// eslint-disable-next-line
export const NotFoundWrapper = styled.div(props => ({
  fontFamily: 'Russo One, sans-serif',
  color: props.theme.colors.primary,
  fontSize: '60px',
  height: '100%',
  textAlign: 'center',
  position: 'relative',
  top: '20%',
  p: {
    fontSize: '30px',
    color: props.theme.colors.blacky,
  },
}))
