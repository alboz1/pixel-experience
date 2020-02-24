import React, { useState, useContext } from 'react';
import Context from '../hooks/Context';

import packageInfoStyles from '../styles/packageInfo.module.sass';

const PackageInfo = () => {
    const { packageInfo, dispatchPackageInfo } = useContext(Context);

    const handleOpenInfo = () => {
        dispatchPackageInfo({ type: 'CLOSE_PACKAGE' });
    }

    return (
        <div className={ packageInfo.opened ? packageInfoStyles.packageInfo : packageInfoStyles.close }>
            <header className="package-info-header">
                <p>PixelExperience_beryllium-10.0-20200213</p>
                <button onClick={ handleOpenInfo } className="close-btn">
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
            <section className="changelog">
                <pre>
                    Some changelog
                </pre>
            </section>
        </div>
    );
}

export default PackageInfo;