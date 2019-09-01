import styled from '@emotion/styled'

// eslint-disable-next-line
export const ListItemContent = styled.div(props => ({
  ...props.theme.flexRow,
  width: '100%',
  p: {
    color: 'red',
  },
}))
