import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class LoginHeader extends React.Component {
    render() {
        return (
            <div className='loginHeader'>
                 <Link to='/' className='loginHeader__back'></Link>
                 <div className='loginHeader__title'>User Login</div>
            </div>
        )
    }
};

export default LoginHeader;