import React, { Component } from 'react';
import InputField from './subcomponents/InputField.js';
import Map from './subcomponents/Map.js';

class ContactPage extends Component {
  state = {
    contactName: '',
    contactEmail: '',
    contactText: '',
  };

  componentDidMount() {}

  handleContactNameInput = event => {
    this.setState({ contactName: event.target.value });
  };

  handleContactEmailInput = event => {
    this.setState({ contactEmail: event.target.value });
  };

  render() {
    return (
      <div id="ContactWrapper">
        <div id="ContactForm">
          <h2>Contact us</h2>
          <InputField
            type={'text'}
            name={'contactName'}
            placeholder={'Your name'}
            handle={this.handleContactNameInput}
          />
          <InputField
            type={'text'}
            name={'firstname'}
            placeholder={'Email'}
            handle={this.handleContactEmailInput}
          />
          <textarea rows="15" />
        </div>
        <div class="underline" />
        <div id="ContactInfo">
          <h2>Visit us</h2>
          <Map />
          <p>Gatgatan 8</p>
          <p>111 11 Stockholm</p>
          <p>Phone: 00 000 00 00</p>
          <p>
            Email:{' '}
            <a href="mailto:email@email.com" target="_top">
              email@email.se
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default ContactPage;
