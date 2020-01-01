import React, { Component } from 'react';
import cn from 'classnames/bind';

import * as styles from './Content.scss';

const cx = cn.bind(styles);

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shortText: true,
        };

        this.showFullText = this.showFullText.bind(this);
        this.showShortText = this.showShortText.bind(this);
    }

    showFullText() {
        this.setState({
            shortText: false,
        });
    }

    showShortText() {
        this.setState({
            shortText: true,
        });
    }

    render() {
        const { shortText } = this.state;
        const { shortContent, fullContent, anchorLink } = this.props;

        return (
            <>
                {shortText && (
                    <div className={cx('root')}>
                        {shortContent}
                        <button
                            className={cx('button')}
                            onClick={this.showFullText}
                        >
                            Читать полностью
                        </button>
                    </div>
                )}

                {!shortText && (
                    <div className={cx('root')}>
                        {fullContent}
                        <a href={anchorLink}>
                            <button
                                className={cx('button')}
                                onClick={this.showShortText}
                            >
                                Скрыть текст
                            </button>
                        </a>
                    </div>
                )}
            </>
        );
    }
}

export default Content;
