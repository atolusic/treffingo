import styled from '@emotion/styled'

// eslint-disable-next-line
export const Container = styled.div(props => ({
  backgroundColor: props.backgroundColor,
  height: '100%',
  padding: '20px 50px',
  transition: 'all .3s',
}))

export const SwitchWrapper = styled.div(() => ({
  position: 'absolute',
  right: '20px',
  top: '30px',
}))
