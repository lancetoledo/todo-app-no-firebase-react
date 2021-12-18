import './App.css';
import { useEffect , useState} from 'react';
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList';

const data = [
  { id: 1, text: "Finish contacts hw", status: true },
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish Clever programmer challenge", status: false },
  { id: 4, text: "Run 1 mile", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
];




function App() {
  // Create a state that holds the data arr
  const [tasks, setTasks] = useState(data)

  
  // Create a side effect that runs a function that switches the todos by filter when the todos OR filter changes


  
  console.log(tasks)
;

  return (

    <div className="App">
        <div className="background-image">
        </div>
      <div className="container">
          <div className="header">
              <div className="title">
                  TODO
              </div>
              <div className="theme">
                  <img src="assets/icon-sun.svg" alt=''/>
              </div>
          </div>

          {/* Pass down todos state and setTodos function as props */}
          <TaskInput tasks = {tasks} setTasks = {setTasks} />

          {/* SHOULD BE THE TODOLIST COMPONENT */}
          {/* Pass down tasks state, setTasks function, filteredTasks, filterTasks, setFilterStatus function */}
          <TaskList
            tasks = {tasks}
            setTasks = {setTasks}
          
          />
      </div>
    </div>
  );
}

export default App;
