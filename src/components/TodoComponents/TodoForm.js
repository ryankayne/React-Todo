import React from 'react';

const ToDoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleToDoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="What to do, what to do?"
      />
      <button onClick={props.handleAddToDo}>Add To Do</button>
      <button onClick={props.handleClearToDos}>Clear Completed</button>
    </form>
  );
};

export default ToDoForm;