import React, { Component } from 'react';
import cn from 'classnames/bind';

import { Anchor } from 'src/components/AnchorTarget';
import anchor from 'src/constants/anchor';
import { Title } from 'src/components/Title';

import { Presentation } from './parts/Presentation';

import * as styles from './Enrollee.scss';

const cx = cn.bind(styles);

class Enrollee extends Component {
    render() {
        return (
            <div className={cx('root')}>
                <Presentation />

                <div className={cx('title')}>
                    <Anchor name={anchor.enrollee} />
                    <Title>Абитуриенту</Title>
                </div>
            </div>
        );
    }
}

export default Enrollee;
