import styled from '@emotion/styled'

// eslint-disable-next-line
export const ListWrapper = styled.div(props => ({
  backgroundColor: props.theme.colors.white,
  width: '250px',
  boxSizing: 'border-box',
  ...props.theme.flexColumn,
  ...props.theme.alignJustifyCenter,
  boxShadow: '0px 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  padding: '5px',
  position: 'relative',
  button: {
    position: 'absolute',
    right: '-13px',
    top: '-10px',
  },
  ...props.overrideListStyle,
}))
