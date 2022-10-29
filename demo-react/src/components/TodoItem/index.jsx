import React from 'react';

import './style.scss';

const TodoItem = (props) => {
  return (
    <div className="card">
      <div className="card__container">
        <p className="card__title">
          <label>Title: </label>
          <label>Task 1</label>
        </p>
        <p className="card__creator">
          <label>Creator: </label>
          <label>Name</label>
        </p>
        <p className="card__status">
          <label>Status: </label>
          <label>New</label>
        </p>
        <hr className="card__lineBreak" />
        <p className="card__description">Description: This is a task</p>
      </div>
      <div >
        <select className="card__select" >
          <option value="New">New</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
      </div>
    </div>
  );
};

TodoItem.propTypes = {};

export default TodoItem;