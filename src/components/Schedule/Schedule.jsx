import React, { Component } from 'react';
import cn from 'classnames/bind';

import links from 'src/constants/links';

import * as styles from './Schedule.scss';

const cx = cn.bind(styles);

class Schedule extends Component {
    render() {
        return (
            <div className={cx('root')}>
                <iframe
                    className={cx('schedule')}
                    src={links.schedule}
                    frameBorder="0"
                />
            </div>
        );
    }
}

export default Schedule;
