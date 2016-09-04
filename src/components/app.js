import React, { Component } from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Contact from './Contact';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Intro></Intro>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}
