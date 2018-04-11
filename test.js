export default (state = 'tata', action) => {
  switch (action.type) {
    case 'f1':
      console.log('tata');
    case 'f4':
      console.log('f4');
    case 'f5':
      console.log('f5');
    default:
      return state;
  }
};
