import React from 'react';
import Layout from '../components/Layout';

import AndroidOS from '../components/AndroidVersion';
import PackageInfo from '../components/PackageInfo';

const DownloadPage = ({ deviceName }) => {
    return (
        <Layout>
            <h2 className="page-header">{ deviceName }</h2>
            <AndroidOS androidVersion='Android 10' />
            <AndroidOS androidVersion='Android 10 PLUS' />
            <AndroidOS androidVersion='Android 9' />
            <AndroidOS androidVersion='Android 9 PLUS' />
            <PackageInfo />
        </Layout>
    );
}

export default DownloadPage;