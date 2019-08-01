import styled from '@emotion/styled'

// eslint-disable-next-line
export const BoardContentHeader = styled.div(props => ({
  width: '30%',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '40px',
  height: '100px',
  p: {
    margin: '0 0 0 40px',
    fontFamily: props.theme.fonts.primary,
    color: props.theme.colors.primary,
    fontSize: '35px',
    textShadow: `2px 2px ${props.theme.colors.shadow}`,
  },
}))
