import React, { useState } from 'react'

export default function TaskInput({tasks,setTasks}) {
    // Create a state that keeps track of the input
    const [input,setInput] = useState('')

    const generateId = (array) => {
        const ids = array.map((item) => item.id);
        // return the latest id + 1
        return Math.max(...ids) + 1;
      };
   
    // When there is a change to the input update the input state and set up to be submited
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    
    // onSubmit if there IS an input CREATE a new task object and add it to the array.
    const handleForm = (e) => {
        // Prevent default so the page doesn't refresh and get re rendered
        e.preventDefault()

        // if input state exists then create the new task object
        if(input) {
            const newTask = {
                id: generateId(tasks),
                // clear any white space BEFORE or AFTER
                text: input.trim(),
                // By default completed should be false
                status: false
            }
            // Add new task to the state with spread operators
            setTasks([newTask,...tasks])
            console.log(tasks)
        }
    }


    return (
        <div className="new-todo">
            <div className="check">
                <div className="check-mark">
                </div>
            </div>
            <div className="new-todo-input">
                <form onSubmit={handleForm}>
                    <input id="todo-input" type="text" placeholder="Create a new todo..." value={input} onChange={handleChange} />
                </form>
            </div>
         </div>
    )
}
