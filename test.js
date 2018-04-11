export default (state = 'tata', action) => {
  switch (action.type) {
    case 'f1':
      console.log('tata');
    default:
      return state;
  }
};
