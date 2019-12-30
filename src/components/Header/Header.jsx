import React, { Component } from 'react';
import cn from 'classnames/bind';

import headerJpg from './assets/header.jpg';
import headerGif from './assets/header.gif';

import * as styles from './Header.scss';
const cx = cn.bind(styles);

class Header extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
        };

        window.onload = () => {
            this.setState({
                loading: false,
            });
        };
    }

    render() {
        const { loading } = this.state;

        const temporaryBackgroundStyles = {
            backgroundImage: `url(${headerJpg})`,
        };

        const styles = {
            backgroundImage: `url(${headerGif})`,
        };

        return (
            <div className={cx('root')}>
                {loading && (
                    <div
                        className={cx('background')}
                        style={temporaryBackgroundStyles}
                    />
                )}
                <div className={cx('background')} style={styles} />
            </div>
        );
    }
}

export default Header;
