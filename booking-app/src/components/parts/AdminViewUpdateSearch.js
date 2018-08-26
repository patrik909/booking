import React from 'react';
import InputField from '../parts/InputField.js';

function AdminViewUpdateSearch(props) {
  return (
    <div id="bookingSearch" className="row">
      <div id="filterCustomerByName" className="col-md-6">
        <p>Filter by name</p>
        <InputField
          type={'text'}
          name={'customersNameFilter'}
          handle={props.inputNameHandle}
          placeholder={'Customers name'}
        />
      </div>
      <div id="filterCustomerByDate" className="col-md-6">
        <p>Filter by Date</p>
        <InputField type={'date'} handle={props.inputDateHandle} />
      </div>
    </div>
  );
}

export default AdminViewUpdateSearch;
