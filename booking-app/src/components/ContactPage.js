import React from 'react';
import Map from './subcomponents/Map.js';
import MapPin from './../images/map-pin.svg';
import Mail from './../images/mail.svg';
import Phone from './../images/phone.svg';

function ContactPage() {
  return (
    <div id="ContactWrapper">
      <div id="MapWrapper">
        <Map />
      </div>
      <div id="ContactDetailsWrapper" class="row">
        <div id="ContactDetailsLeft" class="col-sm-12 col-md-6">
          <p>
            <img src={MapPin} alt="Map pin" />
            Gatgatan 13
          </p>
          <p>111 11 Stockholm</p>
        </div>
        <div id="ContactDetailsRight" class="col-sm-12 col-md-6">
          <p>
            <img src={Phone} alt="Phone logo" />
            070 000 00 00
          </p>
          <p>
            <img src={Mail} alt="Mail logo" />
            <a href="mailto:contact@lelious.se">contact@lelious.se</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
