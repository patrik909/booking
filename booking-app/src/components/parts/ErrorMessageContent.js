import React from 'react';
import Button from '../parts/Button.js';

function ErrorMessageContent(props) {
  return (
    <div id="globalErrorMessage">
      <div id="globalErrorMessageContent">
        <p>Something went wrong, please try again!</p>
        <Button onClick={props.closeGlobalErrorMessage} innerText={'OK'} />
      </div>
    </div>
  );
}

export default ErrorMessageContent;
