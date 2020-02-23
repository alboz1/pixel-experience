import React, { useContext } from 'react';
import DevicesNav from '../components/DevicesNav';
import Device from '../components/Device';
import devicesStyles from '../styles/devices.module.sass';
import Context from '../hooks/Context';

const Devices = () => {
    const { devices } = useContext(Context);

    return (
        <>
            <DevicesNav />
            <div className={ devicesStyles.container }>
                {
                    !devices.length ? <p className="info">Select your device</p> :
                    devices.map(device => {
                        return <Device key={ device } name={ device } />
                    })
                }
            </div>
        </>
    );
}

export default Devices;