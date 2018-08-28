import React from 'react';
import InputField from './InputField.js';
import { Button } from 'reactstrap';

function BookingGuestDetails(props) {
  return (
    <div id="GuestDetails">
      <h2>Guest Details</h2>
      <form className="row">
        <InputField
          type={'text'}
          name={'firstname'}
          placeholder={'First name'}
          handle={props.handleFirstNameInput}
          className={'col-md-12'}
        />
        <p className="text-danger">{props.errorNameMessage}</p>
        <InputField
          type={'text'}
          name={'lastname'}
          placeholder={'Last name'}
          className={'col-md-12'}
          handle={props.handleLastNameInput}
        />
        <p className="text-danger">{props.errorLastNameMessage}</p>
        <InputField
          type={'text'}
          name={'email'}
          placeholder={'Email'}
          className={'col-md-12'}
          handle={props.handleEmailInput}
        />
        <p className="text-danger">{props.errorEmailMessage}</p>
        <InputField
          type={'num'}
          name={'phonenumber'}
          placeholder={'Phone number'}
          className={'col-md-12'}
          handle={props.handlePhoneNumberInput}
        />
        <p className="text-danger">{props.errorPhoneMessage}</p>
        <div id="guestDetailsButtons" className="row">
          <div className="col-6">
            <Button type="submit" onClick={props.backGuestDetails}>
              Back
            </Button>
          </div>
          <div className="col-6">
            <Button type="submit" onClick={props.setGuestDetails}>
              Next
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookingGuestDetails;
