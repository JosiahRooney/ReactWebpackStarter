import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from '../styles/app.styl';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <p>Hello World</p>
      </div>
    );
  }
}
