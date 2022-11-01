import React from 'react';
import Pagination from '../../components/Panigation';
import TodoList from '../../components/TodoList';
import Form from '../../components/Form';


import './style.scss'


const MainContent = (props) => {
  return (

    <>
    <div className="main-container">
      {/* <TodoList />
      <Pagination /> */}
    </div>
    <div className="form-container">
    <Form />
  </div>
    </>
  );
};

MainContent.propTypes = {};

export default MainContent;