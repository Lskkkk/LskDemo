import React, { useState } from 'react';

export default function useCountState(initCount = 0) {
    const [count, setCount] = useState(initCount);
    const addCount = () => {
        setCount(count + 1);
    };
    return {
        count,
        addCount
    }
}