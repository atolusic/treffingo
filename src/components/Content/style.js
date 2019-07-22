import styled from '@emotion/styled'

// eslint-disable-next-line
export const ContentWrapper = styled.div(() => ({
  display: 'flex',
  marginTop: '60px',
  '& :not(:first-child)': {
    marginLeft: '15px',
  },
  backfaceVisibility: 'hidden',
}))
