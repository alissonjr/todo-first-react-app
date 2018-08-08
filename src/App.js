import React, { Component } from 'react';
// import logo from './logo.svg';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Text from './components/WelcomeText/Text';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <Text />
      </div>
    );
  }
}

export default App;
