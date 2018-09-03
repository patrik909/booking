import React from 'react';
import Datepicker from '../Datepicker';

function BookingDetails(props) {
  return (
    <div id="bookingDetailsContent" className="col-12">
      <div className="col-12">
        <Datepicker
          getDate={props.getDate}
          getTime={props.getTime}
          seat1Class={props.isFirstSeatAvailable}
          seat2Class={props.isSecondSeatAvailable}
        />
      </div>
      <div className="col-12">
        <select id="amountOfGuestsDropdown" onChange={props.setAmountOfGuests}>
          <option value="" disabled selected>
            Number of Guests
          </option>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5 Guests</option>
          <option value="6">6 Guests</option>
        </select>
      </div>
    </div>
  );
}

export default BookingDetails;
