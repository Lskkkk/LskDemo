import * as React from 'react';
import GContext from './ContextSetter';
import ContextChild from './ContextChild';

function ContextFarther() {
    return (
        <GContext.Provider value={'二级节点'}>
            <ContextChild />
        </GContext.Provider>
    );
}

export default ContextFarther;
