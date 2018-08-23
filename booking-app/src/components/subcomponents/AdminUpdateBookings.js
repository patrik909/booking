import React, { Component } from 'react';
import InputField from '../parts/InputField.js';
import Button from '../parts/Button.js';

class AdminUpdateBookings extends Component {
  state = {};

  closeUpdateDiv = event => {
    event.preventDefault();
    this.props.closeUpdateDiv();
  };

  render() {
    return (
      <div id="updateDiv" className={this.props.updateDivClass}>
        <Button onClick={this.closeUpdateDiv} innerText={'Cancel'} />
      </div>
    );
  }
}

export default AdminUpdateBookings;
