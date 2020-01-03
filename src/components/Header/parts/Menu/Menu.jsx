import React, { Component } from 'react';
import Media from 'react-media';
import cn from 'classnames/bind';

import anchor from 'src/constants/anchor';
import links from 'src/constants/links';

import * as styles from './Menu.scss';

const cx = cn.bind(styles);

class Menu extends Component {
    render() {
        const linkClassName = cx('link');

        return (
            <div className={cx('root')}>

                <div className={cx('align')}>
                    <a className={linkClassName} href={`#${anchor.start}`}>
                        Главная
                    </a>

                    <a className={linkClassName} href={`#${anchor.about}`}>
                        О кафедре
                    </a>

                    <a className={linkClassName} href={`#${anchor.enrollee}`}>
                        Абитуриентам
                    </a>

                    <Media query="(max-width: 980px)" render={() =>
                        (
                            <a className={linkClassName} href={links.news} target="_blank">
                                Новости
                            </a>
                        )}
                    />
                    <Media query="(min-width: 981px)" render={() =>
                        (
                            <a className={linkClassName} href={`#${anchor.news}`}>
                                Новости
                            </a>
                        )}
                    />

                    {/*<a className={linkClassName} href="#">*/}
                    {/*    Преподаватели*/}
                    {/*</a>*/}

                    {/* Расписание */}
                    <Media query="(max-width: 980px)" render={() =>
                        (
                            <a className={linkClassName} href={links.schedule} target="_blank">
                                Расписание
                            </a>
                        )}
                    />
                    <Media query="(min-width: 981px)" render={() =>
                        (
                            <a className={linkClassName} href={`#${anchor.schedule}`}>
                                Расписание
                            </a>
                        )}
                    />

                    <a
                        className={linkClassName}
                        href={links.energo}
                        target="_blank"
                    >
                        Факультет
                    </a>
                </div>
            </div>
        );
    }
}

export default Menu;
