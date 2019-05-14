import React, { useState } from 'react';

export default function StateHookDemo() {
    const [count, useCount] = useState(0);
    return (
        <div>
            <p>
                State Hook Demo: {count}
            </p>
            <button onClick={() => useCount(count + 1)}>click me to add count</button>
        </div>
    );
}
