import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class HomeHeader extends Component {
    render() {
        return (
            <div className='homeHeader'>
                <header className='homeHeader__wrapper'>
                    <a className='homeHeader__city'>Seattle</a>
                    <Link to='/search' className='homeHeader__search'>Enter store name or address</Link>
                    <Link to='/user' className='homeHeader__avatar'>
                        <div className='homeHeader__portrait' />
                    </Link>
                </header>
            </div>
        );
    }
};

export default HomeHeader;