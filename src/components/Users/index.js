import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import {getUserRequest} from '../../actions/user';

class Users extends Component {
    
    constructor(props) {
        super(props)

        this.props.getUserRequest()
    }

    render(){
        return (
            <Fragment>
                <h2>User Component</h2>
            </Fragment>
        )
    }
    
}

export default connect(null,{getUserRequest})(Users);
