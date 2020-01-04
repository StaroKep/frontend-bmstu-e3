import React, { Component } from 'react';
import cn from 'classnames/bind';

import anchor from 'src/constants/anchor';

import * as styles from './CloseButton.scss';

const cx = cn.bind(styles);

class CloseButton extends Component {
    render() {
        return (
            <div className={cx('root')}>
                <a className={cx('link')} href={`#${anchor.start}`}>
                    ×
                </a>
            </div>
        );
    }
}

export default CloseButton;
