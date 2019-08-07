import styled from '@emotion/styled'

export const StyledInput = styled.input(({ width, additionalStyle }) => ({
  border: '1px solid transparent',
  borderRadius: '3px',
  height: '35px',
  width,
  outlineColor: 'red',
  caretColor: 'red',
  fontWeight: 'bold',
  fontSize: '15px',
  ...additionalStyle,
}))

export const l = 'lint'
