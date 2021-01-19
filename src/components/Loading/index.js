import React, { Component } from 'react';
import './style.css';

class Loading extends Component {
    render() {
        return (
            <div className='loading'>
                <div className='loading__img' />
                <span>Loading...</span>
            </div>
        );
    }
}

export default Loading;