import React from 'react';
import logo from './logo.svg';
import './App.css';
import GContext from './Context/ContextSetter';
import ContextFarther from './Context/ContextFarther';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GContext.Provider value={'一级节点'}>
          <ContextFarther />
        </GContext.Provider>
      </header>
    </div>
  );
}

export default App;
