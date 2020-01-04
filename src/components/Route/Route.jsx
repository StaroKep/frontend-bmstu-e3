import React, { Component } from 'react';
import cn from 'classnames/bind';

import { Anchor } from 'src/components/AnchorTarget';
import anchor from 'src/constants/anchor';
import { Title } from 'src/components/Title';
import { Background } from 'src/components/Background';

import bmstuPNG from './assets/bmstu.png';
import bmstuGIF from './assets/bmstu.gif';

import ulkPNG from './assets/ulk.png';
import ulkGIF from './assets/ulk.gif';

import * as styles from './Route.scss';

const cx = cn.bind(styles);

class Route extends Component {
    render() {
        const bmstuBackgroundProps = {
            jpg: bmstuPNG,
            gif: bmstuGIF,
            position: 'center',
            blackout: false,
        };

        const ulkBackgroundProps = {
            jpg: ulkPNG,
            gif: ulkGIF,
            position: 'center',
            blackout: false,
        };

        return (
            <div className={cx('root')}>
                <Anchor name={anchor.route} />
                <Title>Как добраться?</Title>
                <div className={cx('content')}>
                    <Title type="h3">
                        Главный корпус МГТУ им. Н. Э. Баумана
                    </Title>
                    <div className={cx('map')}>
                        <a
                            href="https://yandex.ru/maps/-/CBQFZXbigA"
                            target="_blank"
                        >
                            <Background {...bmstuBackgroundProps} />
                        </a>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Метро:</td>
                                <td>станция Бауманская</td>
                            </tr>
                            <tr>
                                <td>Адрес:</td>
                                <td>ул. 2-я Бауманская д.5</td>
                            </tr>
                            <tr>
                                <td>Маршрут:</td>
                                <td>
                                    1) Из метро - направо, 400 м. по ул.
                                    Бауманская.
                                    <br />
                                    2) Далее - налево, 350 м. по пер.
                                    Старокирочный.
                                    <br />
                                    3) Направо 250 м. по ул. 2-я Бауманская до
                                    проходной со Львами.
                                    <br />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <Title type="h3">
                        Учебно-лабораторный корпус МГТУ им. Н. Э. Баумана
                    </Title>
                    <div className={cx('map')}>
                        <a
                            href="https://yandex.ru/maps/-/CBQFZXtSWB"
                            target="_blank"
                        >
                            <Background {...ulkBackgroundProps} />
                        </a>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Метро:</td>
                                <td>станция Бауманская</td>
                            </tr>
                            <tr>
                                <td>Адрес:</td>
                                <td>Рубцовская набережная 2/18</td>
                            </tr>
                            <tr>
                                <td>Маршрут:</td>
                                <td>
                                    1) Из метро - направо, 100 м. по ул.
                                    Бауманская.
                                    <br />
                                    2) Далее - налево, 600 м. по ул. Ладожская.
                                    <br />
                                    3) Направо 200 м. до УЛК МГТУ им Н. Э.
                                    Баумана
                                    <br />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Route;
