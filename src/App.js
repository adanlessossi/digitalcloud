import React, { Component } from 'react';

import './App.css';
import Navigationbar from '../src/components/navbar/Navigationbar';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navigationbar />
      </div>
    );
  }
}

export default App;
