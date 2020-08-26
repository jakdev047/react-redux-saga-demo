import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import {getUserRequest} from '../../actions/user';
import UserList from '../UserList';

class Users extends Component {
    
    constructor(props) {
        super(props)

        this.props.getUserRequest()
    }

    render(){
        const users = this.props.users;
        return (
            <Fragment>
                <div style={{padding:'20px',margin:'0 auto',maxWidth: '600px'}}>
                    <UserList users={users.items}/>
                </div>
            </Fragment>
        )
    }
    
}

export default connect(({users})=>({users}),{getUserRequest})(Users);
