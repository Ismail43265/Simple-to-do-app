import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {CreateTodo} from './Components/ComponentTodo.jsx'
import { Todos } from './Components/Todos.jsx'

function App() {
 const [todos, setTodos] = useState([]);

  if (todos.length === 0) {
    fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(data => {
        setTodos(data.todos);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
