import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return(
      <footer className="text-center">
        <div className="footer-above">
          <div className="container">
            <div className="row">
              <div className="footer-col col-md-4">
                <h3 className="spy">Location</h3>
                <p>660 4th Street #621
                  <br/>San Francisco, CA 94107</p>
              </div>
              <div className="footer-col col-md-4">
                <h3 className="spy">Around the Web</h3>
                <ul className="list-inline">
                  <li>
                    <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
              <div className="footer-col col-md-4">
                <h3 className="spy">Email</h3>
                <p><a href="mailto:sales@flashboxnetworks.com">sales@flashboxnetworks.com</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                Copyright &copy; Flashbox Networks 2016
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}