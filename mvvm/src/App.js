import React from 'react';
import compile from './mvvm/compiler';

function App() {
  return (
    <div className="App">
      hello
      {
        compile()
      }
    </div>
  );
}

export default App;
