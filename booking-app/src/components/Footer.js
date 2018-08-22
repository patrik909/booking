import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footerdiv">
        <footer>
          <p>Follow us</p>
          <div className="social-media-icon">
            <a
              href="https://sv-se.facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fa fa-facebook-square fa-2x" aria-hidden="true" />
            </a>
          </div>
          <div className="social-media-icon">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fa fa-twitter-square fa-2x" aria-hidden="true" />
            </a>
          </div>
          <div className="social-media-icon">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fa fa-instagram fa-2x" aria-hidden="true" />
            </a>
          </div>

          <p>© Le'licious AB 2018 </p>
          <div>
            Icons made by{' '}
            <a href="http://www.freepik.com" title="Freepik">
              Freepik
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{' '}
            is licensed by{' '}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
            >
              CC 3.0 BY
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
