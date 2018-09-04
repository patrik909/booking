import React from 'react';
import DayPicker from '@kupibilet/react-day-picker';
import moment from 'moment';
import '@kupibilet/react-day-picker/lib/style.css';
import Button from './parts/Button.js';

// group all bookings per day
const groupBy = (arrayToGroup, keyToGroupBy) => {
  return arrayToGroup.reduce((previous, current) => {
    (previous[current[keyToGroupBy]] =
      previous[current[keyToGroupBy]] || []).push(current);
    return previous;
  }, {});
};

export default class Datepicker extends React.Component {
  state = {
    allBookings: [],
    selectedDay: new Date(),
  };

  componentDidMount() {
    fetch(`api/booking`)
      .then(response => response.json())
      .then(allBookings => {
        this.setState({ allBookings });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDayClick = (day, { selected, disabled }) => {
    if (disabled) {
      // Day is disabled, do nothing
      return;
    }
    if (selected) {
      // Unselect the day if already selected
      this.setState({
        selectedDay: undefined,
      });
      return;
    }

    this.setState({ selectedDay: day });
    this.props.getDate(moment(day).format('YYYY-MM-DD'));
  };

  seatClass = () => {
    this.props.seat1Class
      ? (this.props.seat1Class(this.state.seating1class),
        this.props.seat2Class(this.state.seating2class))
      : null;
  };

  getTime = event => {
    event.target.value === 'seat1'
      ? this.props.getTime('18.00')
      : event.target.value === 'seat2'
        ? this.props.getTime('21.00')
        : null;
  };

  render() {
    const bookingsSeat1ByDate = groupBy(
      this.state.allBookings.filter(booking => booking.time === 'seat1'),
      'date'
    );

    const bookingsSeat2ByDate = groupBy(
      this.state.allBookings.filter(booking => booking.time === 'seat2'),
      'date'
    );

    const selectDayKey = moment(this.state.selectedDay).format('YYYY-MM-DD');

    // get choosen day's bookings
    const bookingsSeat1SelectedDay = bookingsSeat1ByDate[selectDayKey] || [];
    const bookingsSeat2SelectedDay = bookingsSeat2ByDate[selectDayKey] || [];

    // see if seating has maximum bookings, if true, hide btn
    const seating1class = bookingsSeat1SelectedDay.length >= 15 ? 'hide' : '';
    const seating2class = bookingsSeat2SelectedDay.length >= 15 ? 'hide' : '';

    // group all bookings by date
    const fullybookedDates = Object.values(
      groupBy(this.state.allBookings, 'date')
    )
      // filter out all dates which have maximum bookings
      .filter(bookings => bookings.length >= 15 + 15)
      // make the above array of arrays to one array
      .reduce(
        (flattenBookings, bookings) => flattenBookings.concat(bookings),
        []
      )
      // only extract the date from the array
      .map(booking => moment(booking.date).toDate());

    const modifiers = {
      disabled: fullybookedDates,
      highlighted: new Date(),
    };

    return (
      <div>
        <DayPicker
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
      </div>
    );
  }
}
