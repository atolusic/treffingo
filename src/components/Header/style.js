import styled from '@emotion/styled'

export const HeaderWrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`

export const HeaderText = styled.p`
  font-family: 'Russo One', sans-serif;
  font-size: 60px;
  color: ${props => props.titleColor};
  text-shadow: ${props => `2px 2px ${props.theme.colors.shadow}`};
`
