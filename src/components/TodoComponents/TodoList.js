import React from 'react';

import ToDo from './Todo';

const ToDoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <ToDo
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default ToDoList;