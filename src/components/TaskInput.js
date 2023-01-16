import React, { useState } from 'react'

// #3 destructure props
export default function TaskInput({ tasks, setTasks }) {
    // #4 Create a state that keeps track of the input



    //#5 When there is a change to the input update the input state and set up to be submited


    //#6 onSubmit if there IS an input CREATE a new task object and add it to the array.

    // Prevent default so the page doesn't refresh and get re rendered


    //#7 if input state exists then create the new task object

    // Add new task to the state with spread operators


    return (
        <div className="new-todo">
            <div className="check">
                <div className="check-mark">
                </div>
            </div>
            <div className="new-todo-input">
                {/* #8 */}
                <form >
                    <input id="todo-input" type="text" placeholder="Create a new todo..." />
                </form>
            </div>
        </div>
    )
}
