import React from 'react';
import './Form.css';

const Form = (props) => {
     const { value, onChange, onCreate, onKeyPress } = props;
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;