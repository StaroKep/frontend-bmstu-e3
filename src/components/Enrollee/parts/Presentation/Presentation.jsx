import React, { Component } from 'react';
import cn from 'classnames/bind';

import * as styles from './Presentation.scss';

const cx = cn.bind(styles);

class Presentation extends Component {
    constructor() {
        super();

        const sizes = this.getSizes();

        this.state = { ...sizes };

        window.onresize = () => {
            this.setState({ ...this.getSizes() });
        };
    }

    getSizes() {
        const iframeWidth = window.outerWidth;
        const iframeHeight = (iframeWidth / 16) * 9;

        const rootWidth = iframeWidth;
        const rootHeight = rootWidth / 2.4;

        return {
            rootWidth,
            rootHeight,
            iframeWidth,
            iframeHeight,
        };
    }

    render() {
        const { rootWidth, rootHeight, iframeWidth, iframeHeight } = this.state;
        const { videoURL } = this.props;

        const rootStyles = {
            width: `${rootWidth}px`,
            height: `${rootHeight}px`,
        };

        const iframeStyles = {
            minWidth: `${iframeWidth}px`,
            minHeight: `${iframeHeight}px`,
        };

        const resultVideoURL = videoURL || 'eXa02g4jp-s';

        return (
            <div className={cx('root')} style={rootStyles}>
                <a
                    className={cx('watchLink')}
                    target="_blank"
                    href={`https://www.youtube.com/embed/${resultVideoURL}`}
                />
                <iframe
                    style={iframeStyles}
                    className={cx('iframe')}
                    src={`https://www.youtube.com/embed/${resultVideoURL}?controls=0&autoplay=1&loop=1&mute=1&playlist=${resultVideoURL}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    }
}

export default Presentation;
