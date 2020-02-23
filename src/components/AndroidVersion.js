import React, { useState } from 'react';
import androidOSStyles from '../styles/androidOS.module.sass';
import AndroidPackage from './AndroidPackage';

const AndroidOS = ({ androidVersion }) => {
    const [openAccordion, setOpenAccordion] = useState(false);

    const handleOpenAccordion = () => {
        setOpenAccordion(!openAccordion);
    }

    return (
        <div className={androidOSStyles.androidContainer}>
            <header onClick={ handleOpenAccordion }>
                <h4>{ androidVersion }</h4>
            </header>

            <div className={ openAccordion ? "package-container opened" : "package-container" }>
                <div className="packages">
                    <h5>Full packages</h5>
                    <AndroidPackage latestVersion="Latest version" />
                    <AndroidPackage olderVersion="Older versions" />
                    <AndroidPackage />
                    <AndroidPackage />
                </div>
                <hr />
                <div className="packages">
                    <h5>Incremental packages</h5>
                    <AndroidPackage latestVersion="Latest version" />
                </div>
            </div>
        </div>
    );
}

export default AndroidOS;