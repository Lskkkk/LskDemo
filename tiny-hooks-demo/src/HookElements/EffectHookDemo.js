import React from 'react';
import useCountState from './CountStateHook';
import { useEffectT } from '../TinyHooks/myHooks';

export default function EffectHookDemo() {
    const { count, addCount } = useCountState(1);
    useEffectT(() => {
        console.log(`didMount_${count}`);
    }, []);
    useEffectT(() => {
        console.log(`didMount+didUpdate_${count}`);
        return () => console.log(`clear effect_${count}`);
    });
    useEffectT(() => {
        console.log(`didUpdateWhen_${count}_change`);
    }, [count]);
    return (
        <div>
            <p>
                Effect Hook Demo: {count}
            </p>
            <button onClick={addCount}>click me to add count</button>
        </div>
    );
}