import styled from '@emotion/styled'

export const ButtonComponent = styled.button(({ backgroundColor, color, margin }) => ({
  backgroundColor,
  width: '70px',
  height: '40px',
  color,
  borderRadius: '5px',
  outline: 'none',
  border: '1px solid transparent',
  fontSize: '15px',
  margin,
  fontWeight: 'bold',
}))

export const l = 'lint'
