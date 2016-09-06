import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="small-name spy blue">Flashbox Networks</p>
              </div>
            </div>
            <div className="row white">
              <div className="col-md-4 pillars left">
                <p className="intro-text"><p className="intro-text"><strong className="spy"><i className="fa fa-cloud"></i> Cloud</strong></p></p>
                <ul className="intro-text">
                  <li><i className="fa fa-check" aria-hidden="true"></i> Design, Planning, Migration</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Colocation</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Cloud Services</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Storage</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Disaster Recovery</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> DCIM</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Hardware</li>
                </ul>
              </div>
              <div className="col-md-4 pillars middle">
                <p className="intro-text"><p className="intro-text"><strong className="spy"><i className="fa fa-wifi"></i> Network</strong></p></p>
                <ul className="intro-text">
                  <li><i className="fa fa-check" aria-hidden="true"></i> WAN services (MPLS, SD-WAN)</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Transport (Ethernet, SONET, Dark Fiber)</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Internet (IP Transit, Dedicated Access)</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Wireless / Mobile</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Network Hardware</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Consultation: design, planning, sourcing</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Network Operations Center</li>
                </ul>
              </div>
              <div className="col-md-4 pillars left">
                <p className="intro-text"><p className="intro-text"><strong className="spy"><i className="fa fa-shield"></i> Security</strong></p></p>
                <ul className="intro-text">
                  <li><i className="fa fa-check" aria-hidden="true"></i> Network and Cloud Security</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Endpoint Security</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Application Security</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Database Security</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Threat Intelligence</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Security & Risk Consulting</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Incident Response</li>
                  <li><i className="fa fa-check" aria-hidden="true"></i> Vulnerability Assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}