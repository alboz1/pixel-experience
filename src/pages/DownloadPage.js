import React from 'react';

import AndroidOS from '../components/AndroidVersion';
import PackageInfo from '../components/PackageInfo';

const DownloadPage = ({ deviceName }) => {
    return (
        <>
            <h2 className="page-header">{ deviceName }</h2>
            <AndroidOS androidVersion='Android 10' />
            <AndroidOS androidVersion='Android 10 PLUS' />
            <AndroidOS androidVersion='Android 9' />
            <AndroidOS androidVersion='Android 9 PLUS' />
            <PackageInfo />
        </>
    );
}

export default DownloadPage;