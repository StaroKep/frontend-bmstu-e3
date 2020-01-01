import React, { Component } from 'react';
import cn from 'classnames/bind';

import { Anchor } from 'src/components/AnchorTarget';
import links from 'src/constants/links';
import { Background } from 'src/components/Background';
import bmstuLogo from 'src/assets/images/bmstu-logo.png';

import { Menu } from './parts/Menu';

import * as styles from './Header.scss';

const cx = cn.bind(styles);

class Header extends Component {
    render() {
        const logoStyles = {
            backgroundImage: `url(${bmstuLogo})`,
        };

        return (
            <div className={cx('root')}>
                <Anchor name="start" />
                <Background />
                <Menu />

                <div className={cx('content')}>
                    <a
                        className={cx('bmstu-logo')}
                        href={links.bmstu}
                        style={logoStyles}
                        target="_blank"
                    />
                    <a
                        className={cx('link')}
                        href={links.energo}
                        target="_blank"
                    >
                        Энергомашиностроение
                    </a>
                    <a className={cx('link')} href="#">
                        Газотурбинные и нетрадиционные энергоустановки
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;
