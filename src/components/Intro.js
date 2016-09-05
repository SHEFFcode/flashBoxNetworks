import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>FlashBox Networks</h1>
                <p className="lead">FlashBox Networks is a collection of talented internet infrastructure professionals capable of delivering real results to drive your business forward.</p>
              </div>
            </div>
            <div className="row white">
              <div className="col-md-4 pillars left">
                <p className="intro-text"><p className="intro-text"><strong><i className="fa fa-cloud"></i> Cloud</strong></p> is here for all of you bar discovery and hangout needs.</p>
                <p className="intro-text"><strong>Cloud</strong> is here for all of you bar discovery and hangout needs.</p>
              </div><div className="col-md-4 pillars middle">
                <p className="intro-text"><p className="intro-text"><strong><i className="fa fa-wifi"></i> Network</strong></p> is here for all of you bar discovery and hangout needs.</p>
                <p className="intro-text"><strong>Network</strong> is here for all of you bar discovery and hangout needs.</p>
              </div><div className="col-md-4 pillars right">
                <p className="intro-text"><p className="intro-text"><strong><i className="fa fa-shield"></i> Security</strong></p> is here for all of you bar discovery and hangout needs.</p>
                <p className="intro-text"><strong>Security</strong> is here for all of you bar discovery and hangout needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}