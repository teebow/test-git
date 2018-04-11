export default (state = 'conflict', action) => {
  switch (action.type) {
    case 'f1':
      console.log('tata');
    case 'f7':
      console.log('f7');
    default:
      return state;
  }
};
