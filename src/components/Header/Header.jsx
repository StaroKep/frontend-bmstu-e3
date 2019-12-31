import React, { Component } from 'react';
import cn from 'classnames/bind';

import { Background } from './parts/Background';
import { Menu } from './parts/Menu';

import bmstuLogo from './assets/bmstu-logo.png';

import * as styles from './Header.scss';

const cx = cn.bind(styles);

class Header extends Component {
    render() {
        const logoStyles = {
            backgroundImage: `url(${bmstuLogo})`,
        };

        return (
            <div className={cx('root')}>
                <Background />
                <Menu />

                <div className={cx('content')}>
                    <a className={cx('bmstu-logo')} href="#" style={logoStyles} />
                    <a className={cx('link')} href="#">Энергомашиностроение</a>
                    <a className={cx('link')} href="#">Газотурбинные и нетрадиционные энергоустановки</a>
                </div>
            </div>
        );
    }
}

export default Header;
