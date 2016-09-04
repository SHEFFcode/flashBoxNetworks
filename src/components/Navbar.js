import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-custom navbar-fixed-top">
        <div className="container">
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">FlashBox Networks</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul className="nav navbar-nav">
              <li className="hidden"><a href="#page-top"></a></li>
              <li className="page-scroll"><a href="#why">Why us?</a></li>
              <li className="page-scroll"><a href="#who">Who are we?</a></li>
              <li className="page-scroll"><a href="#clients">Bars</a></li>
              <li className="page-scroll"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};
