import React, { Component } from 'react';
import './style.css';
class Header extends Component {
    render() {
        const { isGreyMode, title, onBackClick } = this.props;
        const backgroundColor = isGreyMode ? '#f0f0f0' : '#fff';
        return (
            <header className='header' style={{
                'backgroundColor': backgroundColor
            }}>
                <div className='header__back' onClick={onBackClick}>
                    Back
                </div>
                <div className='header__title'>{title}</div>
            </header>
        );
    }
}

export default Header;