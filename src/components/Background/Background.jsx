import React, { Component } from 'react';
import cn from 'classnames/bind';

import headerGif from './assets/header.gif';
import headerJpg from './assets/header.jpg';

import * as styles from './Background.scss';

const cx = cn.bind(styles);

class Background extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
        };
    }

    componentWillMount() {
        const { gif } = this.props;

        const draftGif = new Image();
        draftGif.onload = () => {
            this.setState({
                loading: false,
            });
        };
        draftGif.src = gif || headerGif;
    }

    render() {
        const { loading } = this.state;
        const { gif, jpg, position } = this.props;

        const temporaryBackgroundStyles = {
            backgroundImage: `url(${jpg || headerJpg})`,
            backgroundPosition: position,
        };

        const styles = {
            backgroundImage: `url(${gif || headerGif})`,
            backgroundPosition: position,
        };

        /** It's important to save order of div's */
        return (
            <>
                {!loading && <div className={cx('root')} style={styles} />}
                {loading && (
                    <div
                        className={cx('root', 'root_temp')}
                        style={temporaryBackgroundStyles}
                    />
                )}
            </>
        );
    }
}

export default Background;
