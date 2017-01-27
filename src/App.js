import React, { Component } from 'react';

import './App.css';
import Panel from './Panel';

class App extends Component {
  render() {
    return (
      <section>
        <h1>ToDo List</h1>
        <Panel />
      </section>
    )
  }
}

export default App;