import React from 'react';
import useCountState from './CountStateHook';

export default function RefHookDemo () {
  const [count, useCount] = React.useState (0);
  const [anotherCount, useAnotherCount] = React.useState (100);
  const previousCount = usePrevious (count);
  const previousAnotherCount = usePrevious (anotherCount);
  debugger;
  return (
    <div>
      <p>
        Ref Hook Demo: <br />
        count now is: {count}, previous is {previousCount.current}<br />
        anotherCount now is: {anotherCount}, previous is {previousAnotherCount.current}
      </p>
      <button
        onClick={() => {
          useCount (count + 1);
          useAnotherCount (anotherCount + 1);
        }}
      >
        click me to add count
      </button>
    </div>
  );
}

function usePrevious (value) {
  const previousEl = React.useRef (0);
  React.useEffect (() => {
    previousEl.current = value;
  });
  return previousEl;
}
