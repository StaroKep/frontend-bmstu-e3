import React, { Component } from 'react';
import cn from 'classnames/bind';

import * as styles from './Header.scss';
import Background from "./parts/Background/Background";

const cx = cn.bind(styles);

class Header extends Component {
    render() {
        return (
            <div className={cx('root')}>
                <Background />
            </div>
        );
    }
}

export default Header;
