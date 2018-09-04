import React from 'react';
import Map from './subcomponents/Map.js';

function ContactPage() {
  return (
    <div id="contactWrapper">
      <div id="mapWrapper">
        <Map />
      </div>
      <h2>Contact or visit us!</h2>
      <div className="underline" />
      <div id="contactDetailsWrapper" className="row">
        <div id="contactDetailsLeft" className="col-sm-12 col-md-6">
          <p>
            <i className="fa fa-map-marker" aria-hidden="true" />
            Gatgatan 13
          </p>
          <p>111 11 Stockholm</p>
        </div>
        <div id="contactDetailsRight" className="col-sm-12 col-md-6">
          <p>
            <i className="fa fa-phone" aria-hidden="true" />
            070 000 00 00
          </p>
          <p>
            <i className="fa fa-envelope-o" aria-hidden="true" />

            <a href="mailto:contact@lelicious.se">contact@lelicious.se</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
