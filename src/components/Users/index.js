import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import {getUserRequest} from '../../actions/user';
import UserList from '../UserList';
import NewUserForm from '../NewUserForm';

class Users extends Component {
    
    constructor(props) {
        super(props)

        this.props.getUserRequest()
    }

    handleSubmit = ({firstName,lastName}) => {
        console.log(firstName,lastName)
    }

    render(){
        const users = this.props.users;
        return (
            <Fragment>
                <div style={{padding:'20px',margin:'0 auto',maxWidth: '600px'}}>
                    <NewUserForm onSubmit={this.handleSubmit}/>
                    <UserList users={users.items}/>
                </div>
            </Fragment>
        )
    }
    
}

export default connect(({users})=>({users}),{getUserRequest})(Users);
