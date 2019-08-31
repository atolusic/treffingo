import styled from '@emotion/styled'

export const NewBoardFormContent = styled.div(props => ({
  ...props.theme.board,
  height: '330px',
}))

export const FormHeader = styled.div(() => ({
  padding: '15px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #fff',
  p: { fontSize: '23px' },
}))

export const FormMainContent = styled.form(() => ({
  position: 'relative',
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
  margin-top: 40px;
`
