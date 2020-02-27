import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AndroidPackage from './AndroidPackage';

import androidOSStyles from '../styles/androidOS.module.sass';

const AndroidOS = ({ androidVersion }) => {
    const [ toggleAccordion, setToggleAccordion] = useState(false);

    const handleOpenAccordion = () => {
        setToggleAccordion(!toggleAccordion);
    }

    const variants = {
        hidden: {
            height: 0,
            overflow: 'hidden'
        },
        visible: {
            height: 'auto'
        }
    }

    return (
        <div className={androidOSStyles.androidContainer}>
            <header onClick={ handleOpenAccordion }>
                <h4>{ androidVersion }</h4>
                <svg className={ toggleAccordion ? "open" : "close" } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                </svg>
            </header>

            <motion.div
                initial="hidden"
                animate={ toggleAccordion ? "visible" : "hidden" }
                variants={ variants }
                className="package-container"
            >
                <div className="packages">
                    <h5>Full packages</h5>
                    <AndroidPackage latestVersion="Latest version" />
                    <AndroidPackage olderVersion="Older versions" />
                    <AndroidPackage />
                    <AndroidPackage />
                </div>

                <div className="packages">
                    <h5>Incremental packages</h5>
                    <AndroidPackage latestVersion="Latest version" />
                </div>
            </motion.div>
        </div>
    );
}

export default AndroidOS;