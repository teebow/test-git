'use strict';

import { connect } from 'react-redux';
class toto extends Component {
    state = { a: false };

    bfunc = () => console.log('function from b');

    render() {
        return (
            'toto';
        );
    }
}

export default toto;