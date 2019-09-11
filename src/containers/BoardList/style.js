import styled from '@emotion/styled'

// eslint-disable-next-line
export const ListItemContent = styled.div(props => ({
  ...props.theme.flexColumn,
  ...props.theme.alignJustifyCenter,
  width: '100%',
  height: '100%',
  p: {
    margin: '20px auto 10px auto',
    height: '30%',
    width: '80%',
    borderBottom: `1px solid ${props.theme.colors.grey}`,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
}))
