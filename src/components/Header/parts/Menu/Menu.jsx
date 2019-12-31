import React, { Component } from 'react';
import cn from 'classnames/bind';

import * as styles from './Menu.scss';

const cx = cn.bind(styles);

class Menu extends Component {
    render() {
        const linkClassName = cx('link');

        return (
            <div className={cx('root')}>
                <div className={cx('align')}>
                    <a className={linkClassName} href="#">
                        Главная
                    </a>
                    <a className={linkClassName} href="#">
                        Новости
                    </a>
                    <a className={linkClassName} href="#">
                        Абитуриентам
                    </a>
                    <a className={linkClassName} href="#">
                        О кафедре
                    </a>
                    <a className={linkClassName} href="#">
                        Преподаватели
                    </a>
                    <a className={linkClassName} href="#">
                        Факультет
                    </a>
                </div>
            </div>
        );
    }
}

export default Menu;
