export default (state = 'toto', action) => {
  switch (action.type) {
    case 'f2':
      console.log('toto');
    default:
      return state;
  }
};
