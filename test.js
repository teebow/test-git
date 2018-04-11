<<<<<<< HEAD
export default (state = 'toto', action) => {
  switch (action.type) {
    case 'f2':
      console.log('toto');
=======
export default (state = 'tata', action) => {
  switch (action.type) {
    case 'f1':
      console.log('tata');
>>>>>>> f1
    default:
      return state;
  }
};
