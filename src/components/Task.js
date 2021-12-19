import React from 'react'

// #13
function Task({task}) {
    return (
        <div className="todo-item">
        <div className="check">
            <div className="check-mark">
                
            </div>
        </div>
        <div className="todo-text">
            {/* #14 */}
           {task.text}
        </div>
    </div>
    )
}

export default Task
