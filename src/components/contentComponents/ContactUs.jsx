import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ajax from '../../api/api';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'user1',
            password: 'user1'
        }
    }
    componentDidMount() {
        ajax('https://jsonplaceholder.typicode.com/posts').then(res => console.log(res));
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    changeUserName = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    clearInput = () => {
        this.setState({
            username: '',
            password: ''
        });
        ReactDOM.findDOMNode(this.refs.userNameInput).focus();
    }
render() {
    return (
        <React.Fragment>
           <h1>Home</h1>
                <form onSubmit={this.submitForm}>
                    <div>
                        <label>Username</label>
                        <input type='text' name='username' ref="userNameInput" onChange={this.changeUserName} value={this.state.username} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' name='password' ref="passwordInput" onChange={this.changePassword} value={this.state.password} />
                    </div>
                    <input type='submit' value='submit' />
                    <input type='button' value='clear' onClick={this.clearInput} />
                </form>
        </React.Fragment>
    );
}
}

export default ContactUs;