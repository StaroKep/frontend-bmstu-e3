import React, { Component } from 'react';
import cn from 'classnames/bind';

import { Header } from 'src/components/Header';
import { About } from 'src/components/About';
import { Enrollee } from 'src/components/Enrollee';
import { News } from 'src/components/News';
import { Schedule } from 'src/components/Schedule';
import { Footer } from 'src/components/Footer';
import { CloseButton } from 'src/components/CloseButton';
import { Background } from 'src/components/Background';
import {Tutors} from "src/components/Tutors";
import {Route} from "src/components/Route";
import anchor from 'src/constants/anchor';

import footerJPG from 'src/assets/images/footer.jpg';
import footerGIF from 'src/assets/images/footer.gif';

import * as styles from './Applications.scss';

const cx = cn.bind(styles);

class Application extends Component {
    constructor() {
        super();

        this.state = {
            hash: window.location.hash,
        };

        this.setHash = this.setHash.bind(this);

        window.onhashchange = this.setHash;
    }

    setHash() {
        const hash = window.location.hash;

        this.setState({
            hash,
        });
    }

    render() {
        const { hash } = this.state;

        let content = null;
        let fullScreen = false;

        const fullScreenBackgroundProps = {
            jpg: footerJPG,
            gif: footerGIF,
            position: 'center',
        };

        switch (hash) {
            case `#${anchor.news}`:
                content = <News />;
                fullScreen = true;
                break;
            case `#${anchor.schedule}`:
                content = <Schedule />;
                fullScreen = true;
                break;
            default:
                content = (
                    <>
                        <Header />
                        <About />
                        <Enrollee />
                        <Tutors/>
                        <Route/>
                        <Footer />
                    </>
                );
        }

        const applicationClassNames = cx('root', {
            'full-screen': fullScreen,
        });

        return (
            <div className={applicationClassNames}>
                {fullScreen && (
                    <>
                        <CloseButton />
                        <Background {...fullScreenBackgroundProps} />
                    </>
                )}
                {content}
            </div>
        );
    }
}

export default Application;
