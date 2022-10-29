import React from 'react';
import { useState } from 'react';

import './style.scss';

const data = [
  {
    title : "Task 1"
,      name : "Thành"
  },
  {
    title : "Task 2"
,      name : "Quân"
  },
  {
    title : "Task 3"
,      name : "Hiếu"
  },
  {
    title : "Task 4"
,      name : "Khang"
  },
  {
    title : "Task 5"
,      name : "Thảo"
  },
  {
    title : "Task 6"
,      name : "Trang"
  },
  {
    title : "Task 7"
,      name : "Tuấn"
  },
  {
    title : "Task 8"
,      name : "Minh"
  },
  {
    title : "Task 9"
,      name : "Lộc"
  },
  {
    title : "Task 10",
    name : "Tường"
  },
  {
    title : "Task 11",
    name : "Long"
  },
  {
    title : "Task 12",
    name : "Hậu",
  },
] 

const TodoItem = ({status}) => {
  const [option, setOption] =  useState (status);
  let change = (event) => {
    setOption(event.target.value);
  };



  return (
    data.map(item => (
    <div className="card">
      <div className="card__container">
        <p className="card__title">
          <label>Title: </label>
          <label>{item.title}</label>
        </p>
        <p className="card__creator">
          <label>Creator: </label>
          <label>{item.name}</label>
        </p>
        <p className="card__status">
          <label id="status">Status:  </label>
          <label >{option}</label>
          
        </p>
        <hr className="card__lineBreak" />
        <p className="card__description">Description: This is a task</p>
      </div>
      <div >
        <select className="card__select" onChange={change} >
          <option value="New">New</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
      </div>
    </div> ))
  );
};

TodoItem.propTypes = {};

export default TodoItem;