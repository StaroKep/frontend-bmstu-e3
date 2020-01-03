import React, { Component } from 'react';
import cn from 'classnames/bind';

import { Anchor } from 'src/components/AnchorTarget';
import anchor from 'src/constants/anchor';
import { Presentation } from 'src/components/Enrollee/parts/Presentation';
import links from "src/constants/links";

import * as styles from './News.scss';

const cx = cn.bind(styles);

class News extends Component {
    render() {
        return (
            <div className={cx('root')}>
                <Anchor name={anchor.news} />

                <iframe
                    className={cx('news')}
                    src={links.news}
                    frameBorder="0"
                />

                <Presentation videoURL="I1bsDYmpXXI" />
            </div>
        );
    }
}

export default News;
