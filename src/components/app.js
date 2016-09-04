import React, { Component } from 'react';
import Navbar from './Navbar';
import Intro from './Intro'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Intro></Intro>
      </div>
    );
  }
}
