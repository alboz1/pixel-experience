import React, { useState, useContext, useRef, useEffect } from 'react';
import devicesNavStyles from '../styles/devicesNav.module.sass';

import devices from '../devices.json';
import Context from '../hooks/Context';

const DevicesNav = () => {
    const [ activeBtn, setActiveBtn ] = useState(null);
    const { dispatch } = useContext(Context);
    const [ scrollBtn, setScrollBtn ] = useState(null);
    const nav = useRef(null);

    useEffect(() => {
        if (nav.current.scrollWidth > nav.current.clientWidth) {
            setScrollBtn(true);
        } else {
            setScrollBtn(false);
        }
    }, [])

    const handleOnClick = (device) => {
        setActiveBtn(device.name);
        dispatch({ type: 'GET_DEVICES', payload: device.devices });
    }

    const handleHideScrollBtn = (e) => {
        const maxScroll = e.target.scrollWidth - e.target.clientWidth;
        if (e.target.scrollLeft >= maxScroll) {
            setScrollBtn(false);
        } else {
            setScrollBtn(true);
        }
    }

    const handleScrollNav = () => {
        nav.current.scrollLeft += 100;
    }

    return (
        <div className={devicesNavStyles.navWrapper}>
            <nav onScroll={ handleHideScrollBtn } ref={ nav } className="device-nav">
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
            {
                scrollBtn ?
                <button onClick={ handleScrollNav } className="scroll-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path d="M0 0h24v24H0V0z" fill="none"/></svg>
                </button>
                : null
            }
        </div>
    );
}

export default DevicesNav;