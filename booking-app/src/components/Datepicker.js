import React from 'react';
import DayPicker from '@kupibilet/react-day-picker';
import '@kupibilet/react-day-picker/lib/style.css';

const bookings = [
      {
    "id": 1,
    "guest_id": 1,
    "details_id": 1,
    "num_of_guests": 2,
    "time": "21",
    "date": "2018-08-21"
  },
    {
    "id": 2,
    "guest_id": 1,
    "details_id": 1,
    "num_of_guests": 2,
    "time": "18",
    "date": "2018-08-24"
  },
    {
    "id": 3,
    "guest_id": 1,
    "details_id": 1,
    "num_of_guests": 2,
    "time": "21",
    "date": "2018-08-24"
  },
    {
    "id": 4,
    "guest_id": 1,
    "details_id": 1,
    "num_of_guests": 2,
    "time": "21",
    "date": "2018-08-24"
  },
{
    "id": 5,
    "guest_id": 1,
    "details_id": 1,
    "num_of_guests": 2,
    "time": "21",
    "date": "2018-08-24"
  },


    ]


// group all bookings per day
function groupBy(arrayToGroup, keyToGroupBy) {
  return arrayToGroup.reduce((previous, current) => {
    (previous[current[keyToGroupBy]] = previous[current[keyToGroupBy]] || []).push(current)
    return previous
  }, {})
}

console.log(groupBy(bookings, 'date'))


const bookingsByDay = groupBy(bookings, 'date')
// For each day see if the amount of bookings are greater than X. 
// Returns new Dates.
//const DAYS_FOR_FULLY_BOOKED = 1
const fullyBookedDays = Object.keys(bookingsByDay).filter(day => {   
  console.log(groupBy(bookingsByDay[day], 'time'));
})



console.log(fullyBookedDays)



export default class Datepicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,  
    };
     
  }
    

  handleDayClick(day, { selected, disabled }) {
    if (disabled) {
      // Day is disabled, do nothing
      return;
    }
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day });
  }
  
    render() {
    return (
      <div>

        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
          
        disabledDays={[
        new Date(2018, 7, 30),
        new Date(2018, 7, 31),
        {
          
          before: new Date(),
        },
      ]}
    
        />
        {this.state.selectedDay ? (
        <div>
          <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
          <p>Avalible times:</p>
          <div>18.00</div>
          <div>21.00</div>
        </div>
        ) : (
          <p>Please select a day.</p>
        )}
      </div>
    );
  }
}