import React from 'react';

import cn from 'classnames/bind';

import * as styles from './Title.scss';

const cx = cn.bind(styles);

const Title = props => {
    const { children, type, ...otherProps } = props;

    switch (type) {
        case 'h2':
            return (
                <h2 {...otherProps} className={cx('root', 'h2')}>
                    {children}
                </h2>
            );
        case 'h3':
            return (
                <h3 {...otherProps} className={cx('root', 'h3')}>
                    {children}
                </h3>
            );
        case 'h1':
        default:
            return (
                <h1 {...otherProps} className={cx('root')}>
                    {children}
                </h1>
            );
    }
};

export default Title;
