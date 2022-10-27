import React, { memo } from 'react';
import PropTypes from 'prop-types';

const todoList = memo((props) => {
    return (
        <div>
        <div className="card-items">
            <h3 className="card-title">title: Task 1</h3>
            <p className="card-text">creator: Author 1 </p>
            <p id="status">status: </p>
            <h4>Description: </h4>
            <p>This is a task,This is a task,This is a task,This is a task... </p>
            <select name="" id="">
                <option value="NEW">NEW</option>
                <option value="DOING">DOING</option>
                <option value="DONE">DONE</option>
            </select>
        </div>
    </div>
  );
});

todoList.propTypes = {
    
};

export default todoList;