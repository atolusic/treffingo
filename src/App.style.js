const colors = {
  white: '#fff',
  primary: '#ff5252',
  secondary: '#ef9a9a',
  blacky: '#333',
  shadow: '#ccc',
  grey: '#E7E7E7',
  pink: '#ffcdd2',
}

const fonts = {
  primary: 'Russo One, sans-serif',
}

const flex = {
  display: 'flex',
}

const flexRow = {
  ...flex,
  flexDirection: 'row',
}

const flexColumn = {
  ...flex,
  flexDirection: 'column',
}

const alignJustifyCenter = {
  justifyContent: 'center',
  alignItems: 'center',
}

const board = {
  backgroundColor: colors.primary,
  width: '310px',
  borderRadius: '10px',
  boxShadow: '3px 4px 5px 0px rgba(119,120,128,0.82)',
  transition: 'all .2s',
  cursor: 'pointer',
  color: colors.white,
  ':hover': {
    transform: 'scale(1.05)',
  },
}

const listInput = {
  boxShadow: '0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23)',
  paddingLeft: '10px',
}

const newListInput = {
  ...listInput,
  marginBottom: '30px',
  width: '85%',
}

export default {
  alignJustifyCenter,
  colors,
  board,
  fonts,
  flex,
  flexColumn,
  flexRow,
  listInput,
  newListInput,
}
