import styled from '@emotion/styled'

// eslint-disable-next-line
export const ErrorMessageWrapper = styled.p(({ positioning }) => ({
  color: '#000',
  fontSize: '15px',
  display: 'block',
  height: '15px',
  margin: '0',
  ...positioning,
}))
