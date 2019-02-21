import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Accordion heading="Click this to hide">
        lorem loremlorem  loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem
      </Accordion>
      </div>
    );
  }
}

export default App;
