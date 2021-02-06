import React from 'react';
import './style.css';

class Banner extends React.Component {
    render() {
        const { isDarkMode } = this.props;
        const style = isDarkMode ? {
            backgroundImage: 'url(https://www.dpfile.com/app/node-mobile-m-isomorphism-web/static/ee72da6bea423a71f81c4e0be8a1dcf7.png)'} : null;

        return (
            <header className='banner' style={style}>
                <div className='banner__title'>
                    <span className='banner__logo'></span>
                    <span className='banner__text'>Find more discounts!</span>
                </div>
                <div className='banner__btns'>
                    <a className='banner__btn' href='https://evt.dianping.com/synthesislink/6702.html'>Open dianping</a>
                    <a className='banner__btn banner__btn--bg' href='https://m.dianping.com/download/redirect?id=11186'>Download App and get more discounts</a>
                </div>
            </header>
        );
    }
};

export default Banner;