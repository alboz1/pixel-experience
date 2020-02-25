import React, { useContext } from 'react';
import Layout from '../components/Layout';
import DevicesNav from '../components/DevicesNav';
import Device from '../components/Device';
import devicesStyles from '../styles/devices.module.sass';
import Context from '../hooks/Context';

const Devices = () => {
    const { devices } = useContext(Context);

    return (
        <Layout>
            <DevicesNav />
            <div className={ devicesStyles.container }>
                {
                    !devices.length ? <p className="info">Select your device</p> :
                    devices.map((device, index) => {
                        return <Device index={index} key={ device } name={ device } />
                    })
                }
            </div>
        </Layout>
    );
}

export default Devices;