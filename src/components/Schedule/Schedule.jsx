import React, { Component } from 'react';
import cn from 'classnames/bind';
import IframeResizer from "iframe-resizer-react";

import { Anchor } from 'src/components/AnchorTarget';
import anchor from 'src/constants/anchor';

import * as styles from './Schedule.scss';
import { Title } from 'src/components/Title';

const cx = cn.bind(styles);

class Schedule extends Component {
    render() {
        return (
            <div className={cx('root')}>
                <Anchor name={anchor.schedule} />
                <Title>Расписание</Title>
                <IframeResizer
                    src="https://students.bmstu.ru/schedule/list"
                    style={{ width: '1px', minWidth: '100%'}}
                />
            </div>
        );
    }
}

export default Schedule;
