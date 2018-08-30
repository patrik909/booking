import React from 'react';

function InputField(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      onChange={props.handle}
      className={props.className}
      placeholder={props.placeholder}
    />
  );
}

export default InputField;
