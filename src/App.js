import React, { Component } from 'react';
import Counter from './components/Counter'
import SuperMarket from './components/SuperMarket'
class App extends Component {
  render() {
    return (
      <>
        <Counter/>
        <hr/>
        <SuperMarket/>
      </>
    );
  }
}

export default App;