import React from 'react';

function TopicInput(props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input
        type="text"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default TopicInput;