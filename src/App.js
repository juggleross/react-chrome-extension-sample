import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  showAlert() {
    alert('Hello world!');
  }

  changeBackgroundColor() {
    document.body.style = 'background: red;';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-guys">
          Hello guys!
        </div>
        <div className="App-guys">
          Hello guys!
        </div>
        <div className="App-guys">
          Hello guys!
        </div>
        <button onClick={this.showAlert}>
          Click Me!
        </button>
        <button onClick={this.changeBackgroundColor}>
          Change background color!
        </button>
      </div>
    );
  }
}

export default App;
