import React from 'react';

function Button(props) {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      value={props.value}
    >
      {props.innerText}
    </button>
  );
}

export default Button;
