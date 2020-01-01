import React, { Component } from 'react';
import cn from 'classnames/bind';

import {Background} from "src/components/Background";

import footerJPG from './assets/footer.jpg';
import footerGIF from './assets/footer.gif';

import * as styles from './Footer.scss';

const cx = cn.bind(styles);

class Footer extends Component {
    render() {
        const backgroundProps = {
            jpg: footerJPG,
            gif: footerGIF,
        };

        return (
            <div className={cx('root')}>
                <Background {...backgroundProps} />
            </div>
        );
    }
}

export default Footer;
