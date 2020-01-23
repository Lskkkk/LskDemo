import * as React from 'react';
import './App.css';
import AsyncTest from './dom/asyncTest';
import SyncTest from './dom/syncTest';
import QueueTest from './dom/queueTest';

class App extends React.Component {
  render() {
    return (
      <div
        id="root"
        style={{ width: 200, height: 200 }}
      >
        <AsyncTest />
        <SyncTest />
        <QueueTest/>
      </div>
    );
  }
}

export default App;
