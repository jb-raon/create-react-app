import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <MyComponent
        name={"Raon"}
        age={3}
      />
    );
  }
}

export default App;