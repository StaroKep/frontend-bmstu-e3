import React from 'react';

import cn from 'classnames/bind';

import * as styles from './Title.scss';

const cx = cn.bind(styles);

const Title = props => {
    const { children } = props;

    return <h1 className={cx('root')}>{children}</h1>;
};

export default Title;
