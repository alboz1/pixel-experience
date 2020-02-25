import React, { useEffect } from 'react';
import { Link } from '@reach/router';
import { motion, useAnimation } from 'framer-motion';

import deviceStyles from '../styles/device.module.sass';

const Device = ({ name, index }) => {
    // const controls = useAnimation();
    const variants = {
        visible: i => ({
            opacity: 1,
            transition: {
                delay: i * 0.1
            }
        }),
        hidden: { opacity: 0 }
    }

    return (
        <motion.div initial="hidden" custom={ index } animate="visible" variants={ variants } className={ deviceStyles.deviceContainer }>
            <Link to={`/download/${ name.replace('/', '') }`}>
                <p>{ name }</p>
            </Link>
        </motion.div>
    );
}

export default Device;