import React, { useContext } from 'react';
import Context from '../hooks/Context';
import { motion } from 'framer-motion';

import packageInfoStyles from '../styles/packageInfo.module.sass';

const PackageInfo = () => {
    const { packageInfo, dispatchPackageInfo } = useContext(Context);

    const handleCloseInfo = () => {
        document.body.style.overflow = 'auto';
        dispatchPackageInfo({ type: 'CLOSE_PACKAGE' });
    }

    const variants = {
        hidden: {
            opacity: 0,
            scale: 1.1,
            x: window.innerWidth <= 560 ? 0 : '-50%',
            y: window.innerWidth <= 560 ? 0 : '-50%'
        },
        visible: {
            opacity: 1,
            scale: 1,
            x: window.innerWidth <= 560 ? 0 : '-50%',
            y: window.innerWidth <= 560 ? 0 : '-50%'
        }
    }

    return (
        <>
            <motion.div
                initial="hidden"
                animate={ packageInfo.opened ? "visible" : "hidden" }
                variants={ variants }
                transition={ { duration: 0.25 } }
                style={{ pointerEvents: packageInfo.opened ? 'auto' : 'none' }}
                className="packageInfo"
            >
                <header className="package-info-header">
                    <p>PixelExperience_beryllium-10.0-20200213</p>
                    <button onClick={ handleCloseInfo } className="close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </button>
                </header>
                <section className="main-info">
                    <p>Version: { packageInfo.version }</p>
                    <p>File name: { packageInfo.name }</p>
                    <p>File size: </p>
                    <p>MD5 hash: </p>
                    <p>Date: </p>
                    <p>Downloads: </p>
                </section>
                <button className="download-btn">Download</button>
                <section className="changelog">
                    <pre>
                        Some changelog
                    </pre>
                </section>
            </motion.div>
            <div
                className={ packageInfo.opened ? packageInfoStyles.overlay : packageInfoStyles.close }
                onClick={ handleCloseInfo }
            >
            </div>
        </>
    );
}

export default PackageInfo;