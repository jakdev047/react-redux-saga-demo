import React, { Fragment } from 'react'
import { ListGroup, Button, ListGroupItem } from 'reactstrap'

const UserList = ({users}) => {
    return (
        <Fragment>
            <ListGroup>
                {
                    users.sort((a,b)=>{
                        if(a.firstName > b.firstName) {
                            return 1;
                        }
                        else if (a.firstName < b.firstName) {
                            return -1;
                        }
                        else if(a.lastName > b.lastName) {
                            return 1;
                        }
                        else if (a.lastName < b.lastName) {
                            return -1;
                        }
                        else {
                            return 0;
                        }
                    }).map((user)=>{
                        return(
                            <ListGroupItem key={user.id}>
                                <section style={{display:'flex'}}>
                                    <div style={{flexGrow:1,margin:'0 auto'}}>
                                        {user.firstName} {user.lastName}
                                    </div>
                                    <div>
                                        <Button outline color="danger">Delete</Button>
                                    </div>
                                </section>
                            </ListGroupItem>
                        );
                    })
                }
            </ListGroup>
        </Fragment>
    )
}

export default UserList;
