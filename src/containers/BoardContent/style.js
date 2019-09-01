import styled from '@emotion/styled'

export const BoardContentHeader = styled.div(props => ({
  width: '30%',
  display: 'flex',
  alignItems: 'center',
  height: '100px',
  marginBottom: '50px',
  p: {
    margin: '0 0 0 40px',
    fontFamily: props.theme.fonts.primary,
    color: props.theme.colors.primary,
    fontSize: '35px',
    textShadow: `2px 2px ${props.theme.colors.shadow}`,
  },
}))

export const BoardContentWrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 40px',
}))

export const BoardContentMain = styled.div(() => ({
  display: 'flex',
  width: '100%',
  '& > *': {
    marginRight: '10px',
  },
}))
