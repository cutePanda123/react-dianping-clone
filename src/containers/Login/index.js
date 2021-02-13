import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import LoginHeader from './components/LoginHeader';

class Login extends Component {
    render() {
        return (
            <div>
                <LoginHeader />
                <LoginForm />
            </div>
        );
    }
}

export default Login;