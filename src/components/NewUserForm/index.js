import React, { Fragment, Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class NewUserForm extends Component {

    state = {
        firstName: '',
        lastName: ''
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        
        this.props.onSubmit({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        });

        this.setState({
            firstName: '',
            lastName: ''
        });
    }

    render() {
        return (
            <Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>First name</Label>
                        <Input onChange={this.changeHandler} name="firstName" value={this.state.firstName}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Lasst name</Label>
                        <Input onChange={this.changeHandler} name="lastName" value={this.state.lastName}/>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" block outline color="primary">Create</Button>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
    
}

export default NewUserForm;
