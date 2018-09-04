import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footerDiv">
        <footer>
          <div className="social-media">
            <p className="footer-text">Follow us</p>
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
          </div>

          <p className="footer-text credit">© Le'licious AB 2018 </p>
          <div className="freepik">
            Icons made by &nbsp;
            <a
              href="http://www.freepik.com"
              title="Freepik"
              rel="noopener noreferrer"
            >
              Freepik &nbsp;{' '}
            </a>
            from &nbsp;{' '}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              rel="noopener noreferrer"
            >
              www.flaticon.com
            </a>
            &nbsp; is licensed by&nbsp;
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noopener noreferrer"
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
