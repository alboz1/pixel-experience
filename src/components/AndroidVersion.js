import React from 'react';
import androidOSStyles from '../styles/androidOS.module.sass';
import AndroidPackage from './AndroidPackage';

const AndroidOS = ({ androidVersion }) => {
    return (
        <div className={androidOSStyles.androidContainer}>
            <header>
                <h4>{ androidVersion }</h4>
            </header>

            <div className="package-container">
                <div className="packages">
                    <h5>Full packages</h5>
                    <AndroidPackage />
                    <AndroidPackage />
                </div>
                <hr />
                <div className="packages">
                    <h5>Incremental packages</h5>
                    <AndroidPackage />
                </div>
            </div>
        </div>
    );
}

export default AndroidOS;