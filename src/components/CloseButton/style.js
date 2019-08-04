import styled from '@emotion/styled'

// eslint-disable-next-line
export const CloseButtonWrapper = styled.button(({ color }) => ({
  background: 'none',
  border: 0,
  color,
  cursor: 'pointer',
  outline: 'none',
  i: {
    fontSize: '18px',
    transition: 'all .2s',
    ':hover': {
      transform: 'scale(1.3)',
    },
  },
}))
