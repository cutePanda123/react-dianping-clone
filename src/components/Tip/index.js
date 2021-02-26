import React, { Component } from 'react';
import './style.css';

class Tip extends Component {
    render() {
        const {message, clickHandler} = this.props;
        return (
            <div className='tip'>
                <div className='tip__alert'>
                    <div className='tip__content'>{message}</div>
                    <div className='tip__btns'>
                        <a className='tip__btn' onClick={clickHandler}>
                            Confirm
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tip;