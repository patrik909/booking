import React from 'react';

function Button(props) {
  return <button onClick={props.onClick}>{props.innerText}</button>;
}

export default Button;
