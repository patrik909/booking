import React from 'react';

function InputField(props) {
    return(
        <input 
            type='text'
            name={
                props.name
            }
            onChange={ 
                props.handle 
            } 
            placeholder={ 
                props.placeholder 
            }
        >
        </input> 
    );
}
    
export default InputField;