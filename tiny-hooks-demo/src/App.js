import React, { Component } from 'react';
import StateHooksDemo from './HookElements/StateHookDemo';
import EffectHookDemo from './HookElements/EffectHookDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <StateHooksDemo/>
          <EffectHookDemo />
        </header>
      </div>
    );
  }
}

export default App;
