import React from 'react';
import Pagination from '../../components/Panigation';
import TodoList from '../../components/TodoList';


import './style.scss'


const MainContent = (props) => {
  return (
    <div className="main-container">
      <TodoList />
      <Pagination />
    </div>
  );
};

MainContent.propTypes = {};

export default MainContent;