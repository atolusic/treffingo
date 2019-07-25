import styled from '@emotion/styled'

// eslint-disable-next-line
export const ContentWrapper = styled.div(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '60px',
  '& > *': {
    marginRight: '15px',
    marginTop: '15px',
  },
  backfaceVisibility: 'hidden',
}))
