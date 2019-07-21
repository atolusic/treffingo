import styled from '@emotion/styled'

import { common } from '../style'

export const NewBoardFormContent = styled.div(() => ({
  ...common,
  height: '330px',
}))

export const ErrorMessage = styled.span(() => ({
  color: '#000',
  fontSize: '15px',
  display: 'inline-block',
  padding: '10px 0',
}))

export const FormHeader = styled.div(() => ({
  padding: '15px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #fff',
  p: { fontSize: '23px' },
  button: {
    background: 'none',
    border: 0,
    color: '#fff',
    cursor: 'pointer',
    outline: 'none',
    i: {
      fontSize: '18px',
      transition: 'all .2s',
      ':hover': {
        transform: 'scale(1.3)',
      },
    },
  },
}))

export const FormMainContent = styled.div(() => ({
  padding: '15px 30px',
  p: { fontSize: '15px' },
  input: {
    marginBottom: '5px',
  },
}))

export const ButtonsWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
`
