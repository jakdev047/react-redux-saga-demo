import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import {getUserRequest,createUserRequest,deleteUserRequest} from '../../actions/user';
import UserList from '../UserList';
import NewUserForm from '../NewUserForm';

class Users extends Component {
    
    constructor(props) {
        super(props)

        this.props.getUserRequest()
    }

    handleSubmit = ({firstName,lastName}) => {
        this.props.createUserRequest({
            firstName,
            lastName
        })
    };

    handleDeleteUserClick = (userId) => {
        this.props.deleteUserRequest(userId);
    }

    render(){
        const users = this.props.users;
        return (
            <Fragment>
                <div style={{padding:'20px',margin:'0 auto',maxWidth: '600px'}}>
                    <NewUserForm onSubmit={this.handleSubmit}/>
                    <UserList users={users.items} onDeleteUser={this.handleDeleteUserClick}/>
                </div>
            </Fragment>
        )
    }
    
}

export default connect(({users})=>({users}),{getUserRequest,createUserRequest,deleteUserRequest})(Users);
