import styled from '@emotion/styled'

export const StyledInput = styled.input(({ width }) => ({
  border: '1px solid transparent',
  borderRadius: '3px',
  height: '35px',
  width,
  outlineColor: 'red',
  caretColor: 'red',
  fontWeight: 'bold',
  fontSize: '15px',
}))

export const l = 'lint'
