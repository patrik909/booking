import React from 'react';
import Datepicker from '../Datepicker';
import { Button } from 'reactstrap';

function BookingDetails(props) {
  return (
    <div id="bookingDetails" className="row">
      <h2 className="col-12">Booking Details</h2>
      <div className="col-12">
        <Datepicker getDate={props.getDate} />
      </div>
      <div className="col-12">
        <select id="amountOfGuestsDropdown" onChange={props.setAmountOfGuests}>
          <option value="" disabled selected>
            Amount of Guests
          </option>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5 Guests</option>
          <option value="6">6 Guests</option>
        </select>
      </div>
      <div className="col-12">
        <Button type="submit" onClick={props.submitBookingDetails}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default BookingDetails;
