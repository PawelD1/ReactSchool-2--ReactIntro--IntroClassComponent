import './App.css';
import React, { Component } from "react";

export default class App extends Component {

  state = {
    timer: 0
  };

  componentDidMount() {
    this.appTimer = setInterval(() => {
    this.setState({timer: this.state.timer + 1});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.appTimer);
  }

  render() {
    const { timer } = this.state;
    return (
      <div id = "display">
        <h1>Licznik</h1>
        <h2>{timer}</h2>
    </div>
    );
  }
}
