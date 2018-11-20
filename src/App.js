import React, { Component } from 'react';
import HockeyStick from "./components/hockeyStick.js";
import Smart from "./components/smart.js";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    stateProperty: "I am therefore I'll think."
  }
  componentDidMount(){
    console.log("Component Did Mount")
  }
  newStateValue = () =>{
    this.setState({
      stateProperty:"New Value"
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HockeyStick/>
          <Smart/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
