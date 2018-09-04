import React from 'react';
import Datepicker from '../Datepicker';

function BookingDetails(props) {
  return (
    <Datepicker
      getDate={props.getDate}
      setTime={props.setTime}
      seat1Class={props.isFirstSeatAvailable}
      seat2Class={props.isSecondSeatAvailable}
      setAmountOfGuests={props.setAmountOfGuests}
    />
  );
}

export default BookingDetails;
