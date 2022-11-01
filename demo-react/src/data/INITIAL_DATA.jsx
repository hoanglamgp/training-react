import React from 'react';
import PropTypes from 'prop-types';

INITIAL_DATA.propTypes = {
  
};

const LIST_STATUS = {
  NEW: 'New',
  DOING: 'Doing',
  DONE: 'Done'
}

function INITIAL_DATA(props) {

  
  

const DATA = [
    {
      title: "Task 1",
      name: "Nhật",
      status: LIST_STATUS.NEW
    },
    {
      title: "Task 2",
       name: "Quân",
      status: LIST_STATUS.NEW
    },
    {
      title: "Task 3"
      , name: "Mỹ",
      status: LIST_STATUS.NEW
    },
    {
      title: "Task 4"
      , name: "Khang",
      status: LIST_STATUS.NEW
    },
    {
      title: "Task 5"
      , name: "Thảo",
      status: LIST_STATUS.NEW
    },
    {
      title: "Task 6"
      , name: "Trang",
      status: LIST_STATUS.NEW
    },
    {
      title: "Task 7"
      , name: "Ngọc",
      status: LIST_STATUS.NEW
    },
    {
      title: "Task 8"
      , name: "Minh",
      status: LIST_STATUS.NEW
    },
    {
      title: "Task 9"
      , name: "Lộc",
      status: LIST_STATUS.NEW
    },
    {
      title: "Task 10",
      name: "Tường",
      status: LIST_STATUS.NEW
    },
    {
      title: "Task 11",
      name: "Long",
      status: LIST_STATUS.NEW
    },
    {
      title: "Task 12",
      name: "An",
      status: LIST_STATUS.NEW
    },
]
  return (
    <div>

    </div>
  );
}

export default INITIAL_DATA;