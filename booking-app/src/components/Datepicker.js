import React from 'react';
import DayPicker from '@kupibilet/react-day-picker';
import '@kupibilet/react-day-picker/lib/style.css';

import Button from './parts/Button.js';

//import Moment from '@kupibilet/react-day-picker';


//const bookings = [
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-21"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-21"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-21"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-21"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-21"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-21"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-21"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-21"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-21"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-21"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-21"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-21"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-21"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-21"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-21"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-21"
//  },
//     {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-22"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-22"
//  },
//    
// {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-24"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-24"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-24"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-24"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-24"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-24"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-24"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-24"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-24"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-24"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-24"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-24"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-24"
//  },{
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat1",
//        "date": "2018-08-24"
//  },
//    {
//        "id": 1,
//        "guest_id": 1,
//        "details_id": 1,
//        "num_of_guests": 2,
//        "time": "seat2",
//        "date": "2018-08-24"
//  },
//    ]





export default class Datepicker extends React.Component {
    
    const dates = []
    const fullyBookedDates = []
//  constructor(props) {
//    super(props);
//    this.handleDayClick = this.handleDayClick.bind(this);
//    this.state = {
//      selectedDay: undefined,
//      seating1class: '',
//      seating2class: '',
//    };
//  }
    
    state = {
        allBookings: [],
        selectedDay: this.day,
        seating1class: '',
        seating2class: ''
    }
    
    componentDidMount(){
        fetch(`api/booking`)
      .then(response => response.json())
      .then(allBookings => {
        this.setState({ allBookings})
        console.log(allBookings)
        
      })
      .catch(error => {
        console.log(error);
      });
        

        console.log(this.state.seating1class)
    }




// group all bookings per day
groupBy = (arrayToGroup, keyToGroupBy) => {
    return arrayToGroup.reduce((previous, current) => {
        (previous[current[keyToGroupBy]] =
            previous[current[keyToGroupBy]] || []).push(current);
        return previous;
    }, {});
}


bookingsByDay = this.groupBy(this.state.allBookings, 'date');


BookedDays = Object.keys(this.bookingsByDay).filter(day => {
    this.dates.push(this.groupBy(this.bookingsByDay[day], 'time'));
});



//checkFullyBookedDays = dates =>  {
//    for (let date of dates) {
//        if (this.date.seat2.length >= 15 && date.seat1.length >= 15) {
//            this.BookedDates.push(date.seat2[0].date);
//        } else {
//            console.log(date.seat2[0].date)
//
//        }
//    }
//}


//disable days in daypicker if fully booked
disableDays = (dates) => {
    var moment = require('moment');
    var list = []
    var formattedList = []

    for (var i = 0; i < dates.length; i++) {
        list.push(moment(new Date(dates[i])));
    }

    for (var i = 0; i < list.length; i++) {
        formattedList.push(list[i]._d)
    }
    return formattedList
}



//check if first seat is fully booked
checkFullyBookedTimes2 = (day) => {
    const seating1 = [];

    for (let date of this.dates) {

        for (var i = 0; i < date.seat1.length; i++) {
            if (date.seat1[i].date === day) {
                seating1.push(date.seat1[0].date)
            }
        }
    }

    if (seating1.length >= 15) {
        return 'hide';
    }

}



//check if seccond seat is fully booked
checkFullyBookedTimes1 = (day) => {
    const seating2 = [];

    for (let date of this.dates) {
        for (var i = 0; i < date.seat2.length; i++) {
            if (date.seat2[i].date === day) {
                seating2.push(date.seat2[0].date);
            }
        }
    }

    if (seating2.length >= 15) {
        return 'hide';
    }

}


modifiers = {
    disabled: this.disableDays(this.fullyBookedDates),
    //disabled: before: new Date(),
};
    

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

    this.setState({
      selectedDay: day,
      seating1class: this.checkFullyBookedTimes2(day.toLocaleDateString()),
      seating2class: this.checkFullyBookedTimes1(day.toLocaleDateString()),
    });
      this.props.getDate(day.toLocaleDateString());
//      this.checkFullyBookedDays(this.state.allBookings)
     console.log(this.dates)


  }

  getTime = event => {
    event.target.value === 'seat1'
      ? this.props.getTime('18.00')
      : event.target.value === 'seat2'
        ? this.props.getTime('21.00')
        : null;
  };
    
    

  render() {
    return (
      <div>
        <DayPicker
          modifiers={this.modifiers}
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
//          disabledDays={[
//        new Date(2017, 3, 12),
//        new Date(2017, 3, 2),
//        {
//          before: new Date(2018, 7, 6),
//        },
//      ]}
        />{' '}
        {this.state.selectedDay ? (
          <div>
            <p>
              {' '}
              You clicked{' '}
              {
                (this.state.selectedDay.toLocaleDateString())
              }
            </p>
            <p> Avalible times: </p>
            <Button
              className={this.state.seating1class}
              onClick={this.getTime}
              value={'seat1'}
              innerText={'18.00'}
            />
            <Button
              className={this.state.seating2class}
              onClick={this.getTime}
              value={'seat2'}
              innerText={'21.00'}
            />
          </div>
        ) : (
          <p> Please select a day. </p>
        )}{' '}
    
  
      </div>

    );
  }
}
