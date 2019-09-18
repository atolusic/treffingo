import styled from '@emotion/styled'

// eslint-disable-next-line
export const BoardListContent = styled.div(props => ({
  ...props.theme.flexColumn,
  ...props.theme.alignJustifyCenter,
  width: '100%',
  height: '100%',
}))

export const ListName = styled.p(props => ({
  margin: '20px auto 10px auto',
  paddingBottom: '10px',
  height: '30%',
  width: '95%',
  borderBottom: `1px solid ${props.theme.colors.grey}`,
  textAlign: 'center',
  textTransform: 'uppercase',
  fontWeight: '500',
}))

export const Form = styled.form(() => ({
  width: '95%',
  margin: '0 auto',
}))
