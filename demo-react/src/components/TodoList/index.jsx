import React from 'react';

import TodoItem from '../TodoItem';

import './style.scss';




const TodoList = (props) => {

  // switchoff = function(){
  //   localStorage.setItem('state', 'off');
  //   this.setState({lights: 'off'}); 
  // },
  
  return (
    
    <div className="todos"> 
      <TodoItem status="New"/>
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;