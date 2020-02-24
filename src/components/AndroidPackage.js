import React, { useContext } from 'react';
import Context from '../hooks/Context';

import packageStyles from '../styles/packages.module.sass';

const AndroidPackage = ({ latestVersion, olderVersion }) => {
    const { dispatchPackageInfo } = useContext(Context);

    const handleOpenPackage = () => {
        dispatchPackageInfo({
            type: 'OPEN_PACKAGE',
            name: 'PixelExperience_beryllium-10.0-20200213',
            version: '10'
        });
    }

    return (
        <>
            <p>{ latestVersion || olderVersion}</p>
            <div onClick={ handleOpenPackage } className={packageStyles.packageWrapper}>
                <p>PixelExperience_beryllium-10.0-20200213</p>
                <button className="download-btn">
                    <svg width="24" height="24" viewBox="0 0 100 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                            <path d="M58.88 0C59.2801 0.187223 59.607 0.501658 59.8096 0.894222C60.0122 1.28679 60.0792 1.73539 60 2.17C60 12.5833 60 22.9967 60 33.41V34.77H69.65C70.02 34.77 70.39 34.77 70.76 34.77C72.47 34.94 72.86 35.7 71.81 37.02C65.57 44.86 59.34 52.69 53.04 60.48C51 63 50 63 47.87 60.46C41.4167 52.92 34.9633 45.3767 28.51 37.83C28.1477 37.2612 27.8651 36.6455 27.67 36C28.284 35.7378 28.9294 35.5563 29.59 35.46C32.75 35.4 35.91 35.46 39.07 35.46H40.26C40.26 35.04 40.26 34.7 40.26 34.36C40.26 23.59 40.26 12.82 40.26 2.04C40.2003 1.60519 40.2946 1.16319 40.5265 0.790604C40.7585 0.418017 41.1135 0.138324 41.53 0L58.88 0Z" fill="#D9E3EE"/>
                            <path d="M0.0599933 63.76H13.86V86.48H86.1V63.77H99.94C99.94 64.12 100 64.46 100 64.77C100 74.05 100 83.3267 100 92.6C100 97.18 97.11 99.96 92.39 99.96H7.51999C3.79999 100 1.17999 98.18 0.279993 95C0.0877182 94.2929 -0.00649605 93.5628 -6.71725e-06 92.83C-6.71725e-06 83.4233 -6.71725e-06 74.0167 -6.71725e-06 64.61C-6.71725e-06 64.36 -6.7167e-06 64.1 0.0599933 63.76Z" fill="#D9E3EE"/>
                        </g>
                    </svg>
                </button>
            </div>
        </>
    );
}

export default AndroidPackage;