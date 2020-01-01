import React, { Component } from 'react';
import cn from 'classnames/bind';

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
                <iframe
                    className={cx('schedule')}
                    src="https://students.bmstu.ru/schedule/list"
                    frameBorder="0"
                />
            </div>
        );
    }
}

export default Schedule;
