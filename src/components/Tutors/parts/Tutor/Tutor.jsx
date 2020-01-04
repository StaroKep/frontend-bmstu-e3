import React from 'react';
import cn from 'classnames/bind';

import * as styles from './Tutor.scss';

const cx = cn.bind(styles);

const Tutor = props => {
    const { name, photo } = props;

    const photoStyles = {
        backgroundImage: `url(${photo})`,
    };

    return (
        <div className={cx('root')}>
            <div className={cx('photo')} style={photoStyles} />
            <div className={cx('name')}>{name}</div>
        </div>
    );
};

export default Tutor;
