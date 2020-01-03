import React, { Component } from 'react';
import cn from 'classnames/bind';

import { Anchor } from 'src/components/AnchorTarget';
import anchor from 'src/constants/anchor';

import * as styles from './News.scss';
import { Presentation } from 'src/components/Enrollee/parts/Presentation';

const cx = cn.bind(styles);

class News extends Component {
    render() {
        return (
            <div className={cx('root')}>
                <Anchor name={anchor.news} />

                <iframe
                    className={cx('news')}
                    src="https://medium.com/@e3.bmstu"
                    frameBorder="0"
                />

                <Presentation videoURL="I1bsDYmpXXI" />
            </div>
        );
    }
}

export default News;
