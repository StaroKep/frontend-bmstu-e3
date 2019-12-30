import React, { Component } from 'react';
import cn from 'classnames/bind';

import headerGif from './assets/header.gif';
import headerJpg from './assets/header.png';

import * as styles from './Background.scss';

const cx = cn.bind(styles);

class Background extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
        };

        const gif = new Image();
        gif.onload = () => {
            this.setState({
                loading: false,
            });
        };
        gif.src = headerGif;
    }

    render() {
        const { loading } = this.state;

        const temporaryBackgroundStyles = {
            backgroundImage: `url(${headerJpg})`,
        };

        const styles = {
            backgroundImage: `url(${headerGif})`,
        };

        /** It's important to save order of div's */
        return (
            <>
                <div className={cx('root')} style={styles} />
                {loading && (
                    <div
                        className={cx('root')}
                        style={temporaryBackgroundStyles}
                    />
                )}
            </>
        );
    }
}

export default Background;
