import React, { useReducer } from 'react';
import Context from '../hooks/Context';
import deviceReducer from './deviceReducer';
import packageReducer from './packageReducer';

export default ({ children }) => {
    const [ devices, dispatch ] = useReducer(deviceReducer, []);
    const [ packageInfo, dispatchPackageInfo ] = useReducer(packageReducer, {});

    return (
        <Context.Provider
            value={{
                devices,
                dispatch,
                packageInfo,
                dispatchPackageInfo
            }}
        >
            { children }
        </Context.Provider>
    );
}