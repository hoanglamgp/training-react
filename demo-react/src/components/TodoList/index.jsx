import React from 'react';

import TodoItem from '../TodoItem';

import './style.scss';

const TodoList = (props) => {
  return (
    <div className="todos">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;