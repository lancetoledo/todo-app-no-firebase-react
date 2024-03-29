import React from 'react'
import Task from './Task'
// #10
function TaskList({ tasks, setTasks }) {

    return (
        <div className="todo-items-wrapper">
            <div className="todo-items">
                {/* #11 Map through the tasks array that get's passed down form app */}
                {/* //  #12 */}

            </div>




            <div className="todo-items-info">
                <div className="items-left">
                    5 items left
                </div>
                {/* SHOULD BE THE FILTER CONTROLLER COMPONENT */}
                <div className="items-statuses">
                    <span className="active">All</span>
                    <span>Active</span>
                    <span>Completed</span>
                </div>
                <div className="items-clear">
                    <span>Clear Completed</span>
                </div>
            </div>
        </div>
    )
}

export default TaskList
