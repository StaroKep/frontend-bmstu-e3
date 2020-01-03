import React, { Component } from 'react';
import cn from 'classnames/bind';

import { Anchor } from 'src/components/AnchorTarget';
import anchor from 'src/constants/anchor';

import * as styles from './News.scss';
import { Title } from 'src/components/Title';
import { Presentation } from 'src/components/Enrollee/parts/Presentation';

const cx = cn.bind(styles);

class News extends Component {
    render() {
        return (
            <div className={cx('root')}>
                <Anchor name={anchor.news} />

                <Title>Новости (скоро)</Title>

                <Presentation videoURL="I1bsDYmpXXI" />
            </div>
        );
    }
}

export default News;
