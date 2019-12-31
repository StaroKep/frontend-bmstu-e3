import React, { Component } from 'react';
import cn from 'classnames/bind';

import { Header } from 'src/components/Header';
import { About } from 'src/components/About';
import { Enrollee } from 'src/components/Enrollee';

import * as styles from './Applications.scss';

const cx = cn.bind(styles);

class Application extends Component {
    render() {
        return (
            <div className={cx('root')}>
                <Header />
                <About />
                <Enrollee />
            </div>
        );
    }
}

export default Application;
