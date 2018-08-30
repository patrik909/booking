import React from 'react';
import DayPicker from '@kupibilet/react-day-picker';
import '@kupibilet/react-day-picker/lib/style.css';

const bookings = [
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-21"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-21"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-21"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-21"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-21"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-21"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-21"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-21"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-21"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-21"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-21"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-21"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-21"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-21"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-21"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-21"
  },
     {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-22"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-22"
  },
    
 {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-24"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-24"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-24"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-24"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-24"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-24"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-24"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-24"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-24"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-24"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-24"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-24"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-24"
  },{
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat1",
        "date": "2018-08-24"
  },
    {
        "id": 1,
        "guest_id": 1,
        "details_id": 1,
        "num_of_guests": 2,
        "time": "seat2",
        "date": "2018-08-24"
  },

    
  
    ]

var dates = []
var fullyBookedDates = []


// group all bookings per day
function groupBy(arrayToGroup, keyToGroupBy) {
    return arrayToGroup.reduce((previous, current) => {
        (previous[current[keyToGroupBy]] = previous[current[keyToGroupBy]] || []).push(current)
        return previous
    }, {})
}

//console.log(groupBy(bookings, 'date'))

const bookingsByDay = groupBy(bookings, 'date')
// For each day see if the amount of bookings are greater than X. 
// Returns new Dates.

const fullyBookedDays = Object.keys(bookingsByDay).filter(day => {
    dates.push(groupBy(bookingsByDay[day], 'time'));
})

console.log(dates)

function checkFullyBookedDays() {
    for (let date of dates) {
        if (date.seat2.length >= 15 && date.seat1.length >= 15) {
            fullyBookedDates.push(date.seat2[0].date)
        }
    }
}


function checkFullyBookedTimes2(days) {
    const seating1 = []

    for (let date of dates) {

            for (var i = 0; i < date.seat1.length; i++) {
                if (date.seat1[i].date === days) {
                    seating1.push(date.seat1[0].date)
                }
            }
        }
    
        if (seating1.length >= 15) {
            return "hide"}
        else {
            return "allGood"
        }
    }


function checkFullyBookedTimes1(days) {
    const seating2 = []

    for (let date of dates) {

        for (var i = 0; i < date.seat2.length; i++) {
            if (date.seat2[i].date === days) {
                seating2.push(date.seat2[0].date)
            }
        }
    }

    if (seating2.length >= 15) {
        return "hide"
    }
        else {
            return "allGood"
        }

}



checkFullyBookedDays()
console.log(fullyBookedDates)

export default class Datepicker extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDay: undefined,
            seating1class: "",
            seating2class: ""
        };
    }


    handleDayClick(day, {
        selected,
        disabled
    }) {
        if (disabled) {
            // Day is disabled, do nothing
            return;
        }
        if (selected) {
            // Unselect the day if already selected
            this.setState({
                selectedDay: undefined
            });
            return;
        }
        this.setState({
            selectedDay: day,
            seating1class : checkFullyBookedTimes2(day.toLocaleDateString()),
            seating2class : checkFullyBookedTimes1(day.toLocaleDateString()),

        });
        this.props.getDate(day.toLocaleDateString());
        console.log(new Date().toLocaleDateString());
    }

    render() {
        return ( <div >
                 
                <DayPicker onDayClick = {this.handleDayClick}
                
                selectedDays = {this.state.selectedDay}

                disabledDays = {[
//                    new Date(2018, 7, 30),
//                    new Date(2018, 7, 31),
                        {
                    //before: new Date(),
                    },
                  ]
                }

                /> 
                
                {
                this.state.selectedDay ? ( 
                    <div >
                    <p> You clicked {this.state.selectedDay.toLocaleDateString() 
}</p> 
                    <p> Avalible times: < /p> 
                    <div className = {this.state.seating1class}> 18.00 < /div> 
                    <div className = {this.state.seating2class}> 21.00 < /div> < /
                    div>
                ) : ( <
                    p > Please select a day. < /p>
                )
            } </div>
    );
}}
