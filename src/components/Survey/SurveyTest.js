import React, { useState } from 'react';

const App = () => {
  const [list, setList] = useState([]);

  const handleSelection = (componentName) => {
    // 선택한 항목을 처리하는 로직을 작성합니다.
    console.log(`Selected: ${componentName}`);
  };

  const handleAddItem = () => {
    // 리스트에 새 항목을 추가하는 로직을 작성합니다.
    const newItem = { id: Date.now(), name: `Component ${list.length + 1}` };
    setList([...list, newItem]);
  };

  return (
    <div>
      <h1>Component Loader</h1>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {list.map((item) => (
          <li key={item.id} onClick={() => handleSelection(item.name)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
