import React from 'react';
import { useStateT } from '../TinyHooks/myHooks';

export default function useCountState(initCount = 0) {
    const [count, setCount] = useStateT(initCount);
    const addCount = () => {
        setCount(count + 1);
    };
    return {
        count,
        addCount
    }
}