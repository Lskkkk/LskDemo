import * as React from 'react';
import './App.css';
import {renderDom} from './dom/main';

class App extends React.Component {
  componentDidMount () {
    renderDom ();
  }

  render () {
    return (
      <div
        id="root"
        style={{width: 200, height: 200}}
      />
    );
  }
}

export default App;
