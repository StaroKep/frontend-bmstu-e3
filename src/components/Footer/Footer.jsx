import React, { Component } from 'react';
import cn from 'classnames/bind';

import { Background } from 'src/components/Background';
import bmstuLogo from 'src/assets/images/bmstu-logo.png';

import footerJPG from './assets/footer.jpg';
import footerGIF from './assets/footer.gif';

import * as styles from './Footer.scss';

const cx = cn.bind(styles);

class Footer extends Component {
    render() {
        const backgroundProps = {
            jpg: footerJPG,
            gif: footerGIF,
            position: 'center',
        };

        const logoStyles = {
            backgroundImage: `url(${bmstuLogo})`,
        };

        return (
            <div className={cx('root')}>
                <Background {...backgroundProps} />
                <div className={cx('content')}>
                    <div className={cx('left-column')}>
                        <div className={cx('logo')} style={logoStyles} />
                        <div className={cx('text')}>
                            <div className={cx('title')}>
                                МГТУ им. Н. Э. Баумана
                            </div>
                            <div className={cx('text')}>
                                © НУК «Энергомашиностроение»
                            </div>
                            <div className={cx('title')}>
                                +7 (499) 263-65-16
                            </div>
                            <div className={cx('text')}>
                                Москва, Лефортовская наб. д. 1
                            </div>
                        </div>
                    </div>
                    <div className={cx('right-column')}>
                        <div className={cx('title')}>Контакты</div>
                        <table>
                            <tr>
                                <td>
                                    <a
                                        target="_blank"
                                        href="https://yandex.ru/maps/-/C6E-r8Yo"
                                    >
                                        Адрес:
                                    </a>
                                </td>
                                <td>
                                    105005, г. Москва, 2-я Бауманская ул. д.5
                                    стр.1, МГТУ им. Н.Э.Баумана, кафедра Э3
                                </td>
                            </tr>
                            <tr>
                                <td>Телефон:</td>
                                <td>+7 (499) 265-78-42</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>e3@bmstu.com</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
