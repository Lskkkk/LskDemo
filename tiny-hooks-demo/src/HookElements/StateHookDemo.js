import React from 'react';
import { useStateT } from '../TinyHooks/myHooks';

export default function StateHookDemo() {
    const [count1, setCount1] = useStateT(1);
    const [count2, setCount2] = useStateT(2);
    return (
        <div>
            <p>
                State Hook 1: {count1}
            </p>
            <button onClick={() => setCount1(count1 + 1)}>add count1</button>
            <p>
                State Hook 2: {count2}
            </p>
            <button onClick={() => setCount2(count2 + 1)}>add count2</button>
        </div>
    );
}
