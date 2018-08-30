import React from 'react';
import InputField from './InputField.js';
import { Button } from 'reactstrap';

function BookingGuestDetails(props) {
  //if its in an error state then display the error message
  let errorNameMessage = null;
  let errorLastNameMessage = null;
  let errorEmailMessage = null;
  let errorPhoneMessage = null;

  if (props.errorName) {
    errorNameMessage = <p>{props.errorName}</p>;
  }
  if (props.errorLastName) {
    errorLastNameMessage = <p>{props.errorLastName}</p>;
  }
  if (props.errorEmail) {
    errorEmailMessage = <p>{props.errorEmail}</p>;
  }
  if (props.errorPhoneNumber) {
    errorPhoneMessage = <p>{props.errorPhoneNumber}</p>;
  }

  return (
    <div id="guestDetailsContent" className="col-12">
      <form>
        <InputField
          type={'text'}
          name={'firstname'}
          placeholder={'First name'}
          handle={props.handleFirstNameInput}
          className={'col-md-12'}
        />
        <p className="text-danger">{errorNameMessage}</p>
        <InputField
          type={'text'}
          name={'lastname'}
          placeholder={'Last name'}
          handle={props.handleLastNameInput}
          className={'col-md-12'}
        />
        <p className="text-danger">{errorLastNameMessage}</p>
        <InputField
          type={'text'}
          name={'email'}
          placeholder={'Email'}
          className={'col-md-12'}
          handle={props.handleEmailInput}
        />
        <p className="text-danger">{errorEmailMessage}</p>
        <InputField
          type={'num'}
          name={'phonenumber'}
          placeholder={'Phone number'}
          className={'col-md-12'}
          handle={props.handlePhoneNumberInput}
        />
        <p className="text-danger">{errorPhoneMessage}</p>
      </form>
    </div>
  );
}

export default BookingGuestDetails;
