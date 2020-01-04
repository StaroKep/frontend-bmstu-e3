import React, { Component } from 'react';
import cn from 'classnames/bind';

import links from "src/constants/links";

import * as styles from './News.scss';

const cx = cn.bind(styles);

class News extends Component {
    render() {
        return (
            <div className={cx('root')}>
                <iframe
                    className={cx('news')}
                    src={links.news}
                    frameBorder="0"
                />
            </div>
        );
    }
}

export default News;
