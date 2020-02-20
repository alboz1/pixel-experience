import React from 'react';
import deviceStyles from '../styles/device.module.sass';

const Device = ({ name }) => {
    return (
        <div className={deviceStyles.container}>
            <p>{ name }</p>
            <i>+</i>
        </div>
    );
}

export default Device;