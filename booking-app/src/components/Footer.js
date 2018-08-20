import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footerdiv">
        <footer>
          <p>Follow us</p>
          <div className="social-media-icon">
            <a href="https://sv-se.facebook.com" target="_blank">
              <i className="fa fa-facebook-square fa-2x" aria-hidden="true" />
            </a>
          </div>
          <div className="social-media-icon">
            <a href="https://twitter.com" target="_blank">
              <i className="fa fa-twitter-square fa-2x" aria-hidden="true" />
            </a>
          </div>
          <div className="social-media-icon">
            <a href="https://www.instagram.com" target="_blank">
              <i className="fa fa-instagram fa-2x" aria-hidden="true" />
            </a>
          </div>

          <p>© Le'licious AB 2018 </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
