import React, { Component } from 'react';
import cn from 'classnames/bind';

import Header from './Header/Header';

import * as styles from './Applications.scss';

const cx = cn.bind(styles);

class Application extends Component {
    render() {
        return (
            <div className={cx('root')}>
                <Header />
            </div>
        );
    }
}

export default Application;
