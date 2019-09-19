import styled from '@emotion/styled'

// eslint-disable-next-line
export const ListItemWrapper = styled.div((props) => ({
  backgroundColor: props.theme.colors.pink,
  height: '50px',
  margin: '10px 0',
  width: '100%',
  border: '1px solid transparent',
  borderRadius: '3px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 6px 6px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
}))
