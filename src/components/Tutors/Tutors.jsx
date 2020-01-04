import React, { Component } from 'react';
import cn from 'classnames/bind';

import { Anchor } from 'src/components/AnchorTarget';
import anchor from 'src/constants/anchor';
import { Title } from 'src/components/Title';
import { Tutor } from './parts/Tutor';
import { tutors } from './data';
import {Presentation} from "src/components/Enrollee/parts/Presentation";

import * as styles from './Tutors.scss';

const cx = cn.bind(styles);

class Tutors extends Component {
    render() {
        const list = tutors.map(tutor => <Tutor key={tutor.name} {...tutor} />);

        return (
            <div className={cx('root')}>
                <Anchor name={anchor.tutors} />
                <Title>Преподаватели</Title>
                <div className={cx('tutors-list')}>{list}</div>
                <Presentation videoURL="I1bsDYmpXXI" />
            </div>
        );
    }
}

export default Tutors;
