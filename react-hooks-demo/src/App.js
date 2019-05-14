import React, { Component } from 'react';
import './App.css';
import StateHookDemo from './Hook/StateHookDemo';
import EffectHookDemo from './Hook/EffectHookDemo';
import RefHookDemo from './Hook/RefHookDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <StateHookDemo/>
          <EffectHookDemo/>
          <RefHookDemo/>
        </header>
      </div>
    );
  }
}

export default App;
