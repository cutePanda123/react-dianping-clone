import React, { Component } from 'react';
import './style.css';

class HomeHeader extends Component {
    render() {
        return (
            <div className='homeHeader'>
                <header className='homeHeader__wrapper'>
                    <a className='homeHeader__city'>Seattle</a>
                    <a className='homeHeader__search'>Enter store name or address</a>
                    <a className='homeHeader__avatar'>
                        <div className='homeHeader__portrait' />
                    </a>
                </header>
            </div>
        );
    }
};

export default HomeHeader;