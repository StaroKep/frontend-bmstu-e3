import React, { Component } from 'react';
import cn from 'classnames/bind';

import { Anchor } from 'src/components/AnchorTarget';
import { Content } from 'src/components/About/parts/Content';
import anchor from 'src/constants/anchor';

import * as styles from './About.scss';
import { Title } from 'src/components/Title';
import { Presentation } from 'src/components/Enrollee/parts/Presentation';

const cx = cn.bind(styles);

class About extends Component {
    render() {
        return (
            <div className={cx('root')}>
                <Anchor name={anchor.about} />
                <Title>О кафедре</Title>
                <Content />
                <Presentation />
            </div>
        );
    }
}

export default About;
