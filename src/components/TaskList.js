import React from 'react'
import Task from './Task'

function TaskList({tasks,setTasks}) {
    
    return (
        <div className="todo-items-wrapper">
        <div className="todo-items">
         {tasks.map((task)=>{
            return <Task
                task = {task}
                setTasks = {setTasks}
                tasks = {tasks}
             />
         })}
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
