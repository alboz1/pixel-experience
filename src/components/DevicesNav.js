import React, { useState, useContext } from 'react';
import devicesNavStyles from '../styles/devicesNav.module.sass';

import devices from '../devices.json';
import Context from '../hooks/Context';

const DevicesNav = () => {
    const [ activeBtn, setActiveBtn ] = useState(null);
    const { dispatch } = useContext(Context);

    const handleOnClick = (device) => {
        setActiveBtn(device.name);
        dispatch({ type: 'GET_DEVICES', payload: device.devices });
    }

    return (
        <nav className={ devicesNavStyles.container }>
            {
                devices.map((device, index) => {
                    return <button
                        className={ device.name === activeBtn ? 'active' : null }
                        key={ index }
                        onClick={ () => handleOnClick(device) }
                    >
                        { device.name }
                    </button>
                })
            }
        </nav>
    );
}

export default DevicesNav;