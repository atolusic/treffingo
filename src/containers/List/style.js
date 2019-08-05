import styled from '@emotion/styled'

// eslint-disable-next-line
export const ListWrapper = styled.div(props => ({
  backgroundColor: props.theme.colors.white,
  width: '250px',
  boxShadow: '0px 1px 10px 2px rgba(119,120,128,0.82)',
  position: 'relative',
  button: {
    position: 'absolute',
    right: '-13px',
    top: '-10px',
  },
}))
