import React, { Component } from 'react';
import cn from 'classnames/bind';

import { Anchor } from 'src/components/AnchorTarget';
import anchor from 'src/constants/anchor';
import links from 'src/constants/links';
import {Title} from "src/components/Title";

import * as styles from './More.scss';

const cx = cn.bind(styles);

class More extends Component {
    render() {
        return (
            <div className={cx('root')}>
                <Anchor name={anchor.more} />
                <Title>Полезные ссылки</Title>
                <div className={cx('content')}>
                    <a
                        className={cx('link')}
                        href={links.bmstu}
                        target="_blank"
                    >
                        Сайт университета
                    </a>
                    <a
                        className={cx('link')}
                        href={links.energo}
                        target="_blank"
                    >
                        Сайт факультета
                    </a>
                    <a className={cx('link')} href={`#${anchor.route}`}>
                        Как добраться
                    </a>
                    <a
                        className={cx('link')}
                        href={links.github}
                        target="_blank"
                    >
                        Хочу улучшить проект
                    </a>
                    <a
                        className={cx('link')}
                        href={links.bmstuVK}
                        target="_blank"
                    >
                        Университет ВКонтакте
                    </a>
                    <a
                        className={cx('link')}
                        href={links.energoVK}
                        target="_blank"
                    >
                        Факультет ВКонтакте
                    </a>
                    <a className={cx('link')} href={links.e3VK} target="_blank">
                        Кафедра ВКонтакте
                    </a>
                    <a
                        className={cx('link')}
                        href={links.studsovetVK}
                        target="_blank"
                    >
                        Студсовет ВКонтакте
                    </a>
                    <a
                        className={cx('link')}
                        href={links.profkomVK}
                        target="_blank"
                    >
                        Профсоюз студентов ВКонтакте
                    </a>
                </div>
            </div>
        );
    }
}

export default More;
