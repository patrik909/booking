import React from 'react';
import DayPicker from '@kupibilet/react-day-picker';
import '@kupibilet/react-day-picker/lib/style.css';

import Button from './parts/Button.js';

//import Moment from '@kupibilet/react-day-picker';

const bookings = [
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-21',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-22',
  },

  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat1',
    date: '2018-08-24',
  },
  {
    id: 1,
    guest_id: 1,
    details_id: 1,
    num_of_guests: 2,
    time: 'seat2',
    date: '2018-08-24',
  },
];

var dates = [];
var fullyBookedDates = [];

// group all bookings per day
function groupBy(arrayToGroup, keyToGroupBy) {
  return arrayToGroup.reduce((previous, current) => {
    (previous[current[keyToGroupBy]] =
      previous[current[keyToGroupBy]] || []).push(current);
    return previous;
  }, {});
}

const bookingsByDay = groupBy(bookings, 'date');

const fullyBookedDays = Object.keys(bookingsByDay).filter(day => {
  dates.push(groupBy(bookingsByDay[day], 'time'));
});

function checkFullyBookedDays() {
  for (let date of dates) {
    if (date.seat2.length >= 15 && date.seat1.length >= 15) {
      fullyBookedDates.push(date.seat2[0].date);
    }
  }
}
//const jaha = ["2018-08-23" , "2018-08-15"]
//disable days in daypicker if fully booked
function disableDays(dates) {
  var moment = require('moment');
  var list = [];
  var formattedList = [];

  for (var i = 0; i < dates.length; i++) {
    list.push(moment(new Date(dates[i])));
  }

  for (var i = 0; i < list.length; i++) {
    formattedList.push(list[i]._d);
  }
  return formattedList;
}

function defaultDate(date) {
  var moment = require('moment');
  let formatedDate = moment(new Date(date));

  return (modifiers['highlighted'] = formatedDate._d);
}

//check if first seat is fully booked
function checkFullyBookedTimes2(days) {
  const seating1 = [];

  for (let date of dates) {
    for (var i = 0; i < date.seat1.length; i++) {
      if (date.seat1[i].date === days) {
        seating1.push(date.seat1[0].date);
      }
    }
  }

  if (seating1.length >= 15) {
    return 'hide';
  }
}

//check if seccond seat is fully booked
function checkFullyBookedTimes1(days) {
  const seating2 = [];

  for (let date of dates) {
    for (var i = 0; i < date.seat2.length; i++) {
      if (date.seat2[i].date === days) {
        seating2.push(date.seat2[0].date);
      }
    }
  }

  if (seating2.length >= 15) {
    return 'hide';
  }
}

checkFullyBookedDays();

const modifiers = {
  disabled: disableDays(fullyBookedDates),
  highlighted: new Date(),
};

export default class Datepicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
      seating1class: '',
      seating2class: '',
    };
  }

  componentWillReceiveProps(props) {
    defaultDate(props.selectedDate);
  }

  handleDayClick(day, { selected, disabled }) {
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
    this.setState({
      selectedDay: day,
      seating1class: checkFullyBookedTimes2(day.toLocaleDateString()),
      seating2class: checkFullyBookedTimes1(day.toLocaleDateString()),
    });
    this.props.getDate(day.toLocaleDateString());
    setTimeout(() => {
      this.seatClass();
    });
  }

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
    console.log(this.state.customersDate);
    console.log(this.props.selectedDate);
    return (
      <div>
        <DayPicker modifiers={modifiers} onDayClick={this.handleDayClick} />
      </div>
    );
  }
}
