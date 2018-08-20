import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div className="footerdiv">
        <footer>
        <div class="social_media_icon">
            <a href="https://sv-se.facebook.com" target="_blank"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
        </div>
        <div class="social_media_icon">
            <a href="https://twitter.com" target="_blank"><i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>
        </div>
        <div class="social_media_icon">
            <a href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
        </div>
        <p>© Le'licious AB 2018 </p>
    </footer>
      </div>
    );
  }
}

export default Footer;
