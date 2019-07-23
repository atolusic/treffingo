export default (state, action) => {
  switch (action.type) {
    case 'case':
      return console.log('case test')
    default:
      return state
  }
}
