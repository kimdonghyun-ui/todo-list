import React from 'react';
import './Form.css';

const Form = (props) => {
  const { input, onChangeInput, onCreate, onKeyPress } = props;
  console.log(input);
  const onChange = (e) => onChangeInput(e.target.value);
  return (
    <div className="form">
      <input value={input} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="create-button" onClick={() => onCreate(input)}>
        추가
      </div>
    </div>
  );
};

export default Form;
