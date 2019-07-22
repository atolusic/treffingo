import styled from '@emotion/styled'

export const NewBoardFormContent = styled.div(props => ({
  ...props.theme.board,
  height: '330px',
}))

export const ErrorMessage = styled.p(() => ({
  color: '#000',
  fontSize: '15px',
  display: 'block',
  height: '15px',
  margin: '6px 0 15px 0',
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

export const ButtonWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
`
