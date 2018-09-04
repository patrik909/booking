import React from 'react';
import DayPicker from '@kupibilet/react-day-picker';
import moment from 'moment';
import '@kupibilet/react-day-picker/lib/style.css';
import Button from './parts/Button.js';
import ErrorMessage from './ErrorMessage.js';
import ErrorMessageContent from './parts/ErrorMessageContent.js';

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
    globalErrorMessage: false,
    allBookings: [],
    selectedDay: new Date(),
    firstSeatActived: '',
    secondSeatActived: '',
  };

  componentDidMount() {
    fetch(`api/booking`)
      .then(response => response.json())
      .then(allBookings => {
        this.setState({ allBookings });
      })
      .catch(error => {
        this.setState({ globalErrorMessage: true });
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

  setTime = event => {
    if (event.target.value === '18.00') {
      this.setState({
        firstSeatActived: 'activeTime',
        secondSeatActived: '',
      });
      this.props.setTime('18.00');
    } else {
      this.setState({
        firstSeatActived: '',
        secondSeatActived: 'activeTime',
      });
      this.props.setTime('21.00');
    }
  };

  setAmountOfGuests = event => {
    this.props.setAmountOfGuests(event.target.value);
  };

  closeGlobalErrorMessage = () => {
    this.setState({ globalErrorMessage: false });
  };

  render() {
    const bookingsSeat1ByDate = groupBy(
      this.state.allBookings.filter(booking => booking.time === '18.00'),
      'date'
    );

    const bookingsSeat2ByDate = groupBy(
      this.state.allBookings.filter(booking => booking.time === '21.00'),
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
      .filter(bookings => bookings.length >= 30)
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
        {this.state.globalErrorMessage === true ? (
          <ErrorMessage element={document.getElementById('modal')}>
            <ErrorMessageContent
              closeGlobalErrorMessage={this.closeGlobalErrorMessage}
            />
          </ErrorMessage>
        ) : null}
        <DayPicker
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
        <div id="availableTimes" className="row-md-12 row-lg-6">
          <p className="availableTimesInfo">Available times</p>
          <div className="timeButtonContainer">
            <Button
              className={seating1class + ' ' + this.state.firstSeatActived}
              onClick={this.setTime}
              value={'18.00'}
              innerText={'18.00'}
            />
            <Button
              className={seating2class + ' ' + this.state.secondSeatActived}
              onClick={this.setTime}
              value={'21.00'}
              innerText={'21.00'}
            />
          </div>
          <p className="availableTimesInfo">Choose number of guests</p>
          <select id="amountOfGuestsDropdown" onChange={this.setAmountOfGuests}>
            <option name="numOfGuests" disabled defaultValue>
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
}
