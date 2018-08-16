import React, { Component } from 'react';

class BookingPage extends Component {
    
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    }
    
    componentDidMount() { 
        
    }

    submitGuestDetails = (event) => {
        event.preventDefault();
        
        fetch(`http://localhost:3000/create-guest?firstname=${this.state.firstName}&lastname=${this.state.lastName}&email=${this.state.email}&phone=${this.state.phoneNumber}`) 
            .then(function(response){
                return response.json();
            }).then((fetched) => {
                console.log(fetched)
            }).catch(function(error) {
                console.log(error);
            });
    }
    
    handleFirstNameInput = (event) => {
        this.setState({firstName: event.target.value})
    }
    
    handleLastNameInput = (event) => {
        this.setState({lastName: event.target.value})
    }
        
    handleEmailInput = (event) => {
        this.setState({email: event.target.value})
    }
            
    handlePhoneNumberInput = (event) => {
        this.setState({phoneNumber: event.target.value})
    }
    
    
    
    render() {
        return (
            <div className="BookingPage">
                <div className="guestDetails">
                    <p>Guest details</p>
                    <form>
                        <input    
                            type="text" 
                            name="firstname"     
                            placeholder="First name"
                            onChange={this.handleFirstNameInput}       
                        />
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Last name"
                            onChange={this.handleLastNameInput}
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={this.handleEmailInput}
                        />
                        <input
                            type="text"
                            name="phonenumber"
                            placeholder="Phone"
                            onChange={this.handlePhoneNumberInput}
                        />
                        <button type="submit" onClick={this.submitGuestDetails}>Book</button>
                    </form>         
                </div>
                <div className="bookingDetails">
                    <p>Booking details</p>
                    For: 
                    <select name="cars">
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="4">5 Guests</option>
                        <option value="4">6 Guests</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default BookingPage;
