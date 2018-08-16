import React, { Component } from 'react';
import InputField from './subcomponents/InputField.js';

class BookingPage extends Component {
    
    state = {
        /** --- Booking Details --- **/
        amountOfGuests: '',
        /** --- Guest Details --- **/
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    }
    
    componentDidMount() { 
        
    }
    /** --- Booking Details --- **/

    setAmountOfGuests = (event) => {
        this.setState({amountOfGuests: event.target.value})
    }

    /** ----- Guest Details----- **/

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
            <div id='BookingWrapper'>
                <div id='BookingDetails'>
                    <p>Booking Details</p>
                    <select
                        onChange={
                            this.setAmountOfGuests
                        }    
                    >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                    </select>
                </div>
                <div id='GuestDetails'>
                    <p>Guest details</p>
                    <form>
                        <InputField 
                            name={
                                'firstname'
                            }
                            placeholder={
                                'First name'
                            }
                            onChange={
                                this.handleFirstNameInput
                            }
                        />
                        <InputField 
                            name={
                                'lastname'
                            }
                            placeholder={
                                'Last name'
                            }
                            onChange={
                                this.handleLastNameInput
                            }
                        />
                        <InputField 
                            name={
                                'email'
                            }
                            placeholder={
                                'Email'
                            }
                            onChange={
                                this.handleEmailInput
                            }
                        />
                        <InputField 
                            name={
                                'phonenumber'
                            }
                            placeholder={
                                'Phone number'
                            }
                            onChange={
                                this.handlePhoneNumberInput
                            }
                        />
                        <button type="submit" onClick={this.submitGuestDetails}>Book</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default BookingPage;
