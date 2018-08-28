import React from 'react';
import Datepicker from '../Datepicker';
import { Button } from 'reactstrap';

function BookingDetails(props) {
  return (
    <div id="bookingDetails" className="row">
      <h2 className="col-12">Booking Details</h2>
      <Datepicker getDate={props.getDate} />
      <select className="col-12" onChange={props.setAmountOfGuests}>
        <option value="1">1 Guest</option>
        <option value="2">2 Guests</option>
        <option value="3">3 Guests</option>
        <option value="4">4 Guests</option>
        <option value="5">5 Guests</option>
        <option value="6">6 Guests</option>
      </select>
      <Button type="submit" onClick={props.submitBookingDetails}>
        Next
      </Button>
    </div>
  );
}

export default BookingDetails;
