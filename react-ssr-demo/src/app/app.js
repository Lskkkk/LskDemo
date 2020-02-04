import * as React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.addCount = this.addCount.bind(this);
    console.log('constructor!!!!!!!');
  }
  componentDidMount() {
    console.log('componentDidMount!!!!!!!');
  }
  render() {
    console.log('render!!!!!!!');
    return (
      <div id="app">
        <p>{this.state.count}</p>
        <button onClick={this.addCount} style={{ width: 100, height: 50, backgroundColor: '#5325' }}>add</button>
      </div>
    );
  }
  addCount() {
    this.setState((state) => ({ count: state.count + 1 }));
  }
}

export default App;
