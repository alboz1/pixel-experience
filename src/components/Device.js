import React from 'react';
import { Link } from '@reach/router';

import deviceStyles from '../styles/device.module.sass';

const Device = ({ name }) => {
    return (
        <Link
            to={`${process.env.PUBLIC_URL}/download/${ name.replace('/', '') }`}
            className={ deviceStyles.deviceContainer }
        >
            <p>{ name }</p>
        </Link>
    );
}

export default Device;