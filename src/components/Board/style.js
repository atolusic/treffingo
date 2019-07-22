import styled from '@emotion/styled'

// eslint-disable-next-line
export const BoardContent = styled.div(props => ({
  ...props.theme.board,
  height: '130px',
  fontSize: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  ...props.overrideBoardContent,
}))
