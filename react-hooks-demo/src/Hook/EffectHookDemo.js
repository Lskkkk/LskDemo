import React, { useEffect } from 'react';
import useCountState from './CountStateHook';

export default function EffectHookDemo() {
    const {count, addCount} = useCountState(1);
    useEffect(() => {
        // componentDidMount || componentDidUpdate
        console.log(`接着执行这个: ${count}`);

        // 这个设计的原因在：https://react.docschina.org/docs/hooks-effect.html#explanation-why-effects-run-on-each-update
        return () => console.log(`先执行这个,其实执行的是上一次的cleanEffect: ${count}`); // componentWillUnMount || before next render
    }, [count]);
    /**
     * [count]表示 if (count不变) effect里面的所有语句不执行
     * If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument.（赖得很）
     */
    return (
        <div>
            <p>
                Effect Hook Demo: {count}
            </p>
            <button onClick={addCount}>click me to add count</button>
        </div>
    );
}