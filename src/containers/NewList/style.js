import styled from '@emotion/styled'

// eslint-disable-next-line
export const NewListWrapper = styled.div(props => ({
  ...props.theme.flexRow,
  height: '100px',
  '& input': {
    marginTop: '10px',
  },
}))
