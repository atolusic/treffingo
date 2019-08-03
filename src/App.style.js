const colors = {
  white: '#fff',
  primary: '#ff5252',
  secondary: '#ef9a9a',
  blacky: '#333',
  shadow: '#ccc',
}

const fonts = {
  primary: 'Russo One, sans-serif',
}

const board = {
  backgroundColor: colors.primary,
  width: '330px',
  borderRadius: '10px',
  boxShadow: '3px 4px 5px 0px rgba(119,120,128,0.82)',
  transition: 'all .2s',
  cursor: 'pointer',
  color: colors.white,
  ':hover': {
    transform: 'scale(1.05)',
  },
}

export default {
  colors,
  board,
  fonts,
}
