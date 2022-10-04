import React, { useState } from 'react';
import TodoItms from './TodoItms';

const Form = () => {
  const [inputData, setInputData] = useState('');
  const [todos, setTodos] = useState([]);

  const addItem = () => {
    if (inputData) {
      setTodos([...todos, { title: inputData, completed: false }]);
      setInputData('');
    }
  };

  console.log('todos', todos);
  return (
    <div>
      <div>
        <input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="enterbvalue here"
        />{' '}
        &nbsp; &nbsp; &nbsp;
        <button onClick={addItem}>Add Item</button>
      </div>

      <TodoItms todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Form;
