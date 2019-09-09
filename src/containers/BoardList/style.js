import styled from '@emotion/styled'

// eslint-disable-next-line
export const ListItemContent = styled.div(props => ({
  ...props.theme.flexRow,
  width: '100%',
  p: {
    margin: '0 auto',
    width: '100%',
    padding: '5px 10px 20px 10px',
    borderBottom: `1px solid ${props.theme.colors.grey}`,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}))
