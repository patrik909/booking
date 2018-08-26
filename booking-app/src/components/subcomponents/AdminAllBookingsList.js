import React from 'react';
//import Button from '../parts/Button.js';

function AdminAllBookingsList(props) {
  console.log(props.allBookings);
  return (
    <div>hej</div>
    //        <ul id="allBookingsList" className='container'>
    //          {this.props.allBookings.map((booking, i) => {
    //            if (
    //              booking.firstname.includes(this.state.customersNameFilter) ||
    //              booking.lastname.includes(this.state.customersNameFilter)
    //            ) {
    //              return (
    //                <li key={i} className="row">
    //                  <div className="customersName col-md-3">
    //                    {booking.firstname} {booking.lastname}
    //                  </div>
    //                  <div className="customersPhone col-md-2">{booking.phone}</div>
    //                  <div className="customersEmail col-md-3">{booking.email}</div>
    //                  <div className="customersBookedDate col-md-1">
    //                    {booking.num_of_guests}
    //                  </div>
    //                  <div className="customersBookedDate col-md-2">
    //                    {booking.time} | {booking.date}
    //                  </div>
    //                  <div className="customersButton col-md-1">
    //                    {' '}
    //                    <Button
    //                      value={booking.bookingId}
    //                      onClick={this.openUpdateDiv}
    //                      innerText={'Update'}
    //                    />
    //                    <Button
    //                      value={booking.bookingId}
    //                      onClick={this.deleteBooking}
    //                      innerText={'Delete'}
    //                    />
    //                  </div>
    //                </li>
    //              );
    //            }
    //          })}
    //        </ul>
  );
}

export default AdminAllBookingsList;
