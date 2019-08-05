import styled from '@emotion/styled'

// eslint-disable-next-line
export const NewListWrapper = styled.div(props => ({
  ...props.theme.flexRow,
  width: '100%',
}))

export const ListAnimationWrapper = styled.div`
  transition: opacity .5s;
  opacity: ${({ state }) => {
    switch (state) {
      case 'entering':
        return '0'
      case 'entered':
        return '1'
      case 'exiting':
        return '1'
      default:
        return '0'
    }
  }}
`
