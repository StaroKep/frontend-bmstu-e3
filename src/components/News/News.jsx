import React, { Component } from 'react';
import cn from 'classnames/bind';

import {Anchor} from "src/components/AnchorTarget";
import anchor from "src/constants/anchor";

import * as styles from './News.scss';
import {Title} from "src/components/Title";

const cx = cn.bind(styles);

class News extends Component {
    render() {
        return (
            <div className={cx('root')}>
                <Anchor name={anchor.news} />
                <Title>Новости</Title>
                <iframe className={cx('schedule')} src="https://bmstu-e3.blogspot.com/" frameBorder="0"/>
            </div>
        );
    }
}

export default News;
