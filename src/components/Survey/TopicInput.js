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
        placeholder={props.name} 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
  );
}

export default TopicInput;