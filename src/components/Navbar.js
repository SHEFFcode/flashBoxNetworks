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
            <a className="navbar-brand" href="#"><img className="logo-img" src="style/img/FlashboxNetworks.png" alt="flashobx"/></a>
          </div>
          <div id="navbar" className="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul className="nav navbar-nav">
              <li className="hidden"><a href="#page-top"></a></li>
              <li className="page-scroll"><a href="#contact"><i className="lead">Contact</i></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};
