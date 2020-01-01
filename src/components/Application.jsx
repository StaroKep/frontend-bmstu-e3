import React, { Component } from 'react';
import cn from 'classnames/bind';

import { Header } from 'src/components/Header';
import { About } from 'src/components/About';
import { Enrollee } from 'src/components/Enrollee';
import { News } from 'src/components/News';
import { Schedule } from 'src/components/Schedule';
import { Footer } from 'src/components/Footer';

import * as styles from './Applications.scss';

const cx = cn.bind(styles);

class Application extends Component {
    render() {
        return (
            <div className={cx('root')}>
                <Header />
                <About />
                <Enrollee />
                <News />
                <Schedule />
                <Footer />
            </div>
        );
    }
}

export default Application;
