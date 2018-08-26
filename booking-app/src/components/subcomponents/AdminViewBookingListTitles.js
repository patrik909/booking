import React from 'react';

function AdminViewUpdateListHeader(props) {
  return (
    <div id="bookingListTitles" className="row">
      <div className="col-md-3">{props.nameTitle}</div>
      <div className="col-md-2">{props.phoneTitle}</div>
      <div className="col-md-3">{props.emailTitle}</div>
      <div className="col-md-1">{props.numOfGuestsTitle}</div>
      <div className="col-md-2">{props.timeDateTitle}</div>
      <div className="col-md-1">{props.optionsTitle}</div>
    </div>
  );
}

export default AdminViewUpdateListHeader;
