import React from 'react';

const TodoItms = ({ todos, setTodos }) => {
  const completeTodo = (ind) => {
    setTodos(
      todos.map((a, index) => {
        if (index === ind) {
          return { ...a, completed: !a.completed };
        }
        return a;
      })
    );
  };
  const deleteTodo = (ind) => {
    setTodos(todos.filter((a, index) => index !== ind));
  };

  const removeAll = () => {
    setTodos([]);
  };
  return (
    <div>
      <h2>TodoItms</h2>
      {todos.map((a, ind) => {
        return (
          <div key={ind} className="items">
            <h3>{ind + 1}</h3> &nbsp; &nbsp; &nbsp;
            {a.completed === true ? (
              <h4 style={{ color: 'green' }}>{a.title}</h4>
            ) : (
              <h4>{a.title}</h4>
            )}{' '}
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => completeTodo(ind)}>Complete</button> &nbsp;
            &nbsp; &nbsp;
            <button onClick={() => deleteTodo(ind)}>Delete</button>
          </div>
        );
      })}
      {todos.length > 0 ? (
        <button onClick={removeAll}>Delete All</button>
      ) : null}
    </div>
  );
};

export default TodoItms;
