import React, { useReducer } from 'react';
import Context from '../hooks/Context';
import deviceReducer from './deviceReducer';

export default ({ children }) => {
    const [ devices, dispatch ] = useReducer(deviceReducer, []);

    return (
        <Context.Provider
            value={{
                devices,
                dispatch
            }}
        >
            { children }
        </Context.Provider>
    );
}