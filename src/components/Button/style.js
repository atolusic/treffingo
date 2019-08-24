import styled from '@emotion/styled'

// eslint-disable-next-line
export const ButtonComponent = styled.button(({
  backgroundColor,
  color,
  margin,
  hover,
  additionalStyle,
  disabled,
}) => ({
  backgroundColor,
  width: '70px',
  height: '40px',
  color,
  transition: 'all .2s',
  backfaceVisibility: 'hidden',
  borderRadius: '5px',
  outline: 'none',
  border: '1px solid transparent',
  boxShadow: '2px 3px 4px 0px rgba(119,120,128,0.82)',
  fontSize: '15px',
  margin,
  fontWeight: 'bold',
  cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? '0.8' : '1',
  ':hover': {
    ...hover,
  },
  ...additionalStyle,
}))
