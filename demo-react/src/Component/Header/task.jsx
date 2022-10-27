import React from 'react';
import PropTypes from 'prop-types';

const Task = props => {
    return (
        <div>
            <input type="button" value="Create New Task" />
            <input type="text" placeholder='Type something to search' />
            <input type="button" value="Search" />
        </div>
    );
};

Task.propTypes = {
    
};

export default Task;