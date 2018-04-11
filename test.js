export default (state = 'tata', action) => {
  switch (action.type) {
    case 'f1':
      console.log('tata');
    case 'f4':
      console.log('f4');
    default:
      return state;
  }
};
