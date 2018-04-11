export default (state = 'toto', action) => {
  switch (action.type) {
    case 'f2':
      console.log('toto');
    case 'f4':
      console.log('f4');  
    default:
      return state;
  }
};
