import React from 'react';
import Button from './Button.js';

function AdminBookingSubmitted(props) {
  return (
    <div id="adminBookingSubmittedContent" className="row">
      <h2>This booking has been created</h2>
      <div id="bookedDetails">
        <p>{props.name}</p>
        <p>{props.email}</p>
        <p>{props.phoneNumber}</p>
        <p>{props.numOfGuests} Guest(s) </p>
        <p>{props.timeDate}</p>
      </div>
      <Button onClick={props.closeCreateBooking} innerText={'OK'} />
    </div>
  );
}

export default AdminBookingSubmitted;
