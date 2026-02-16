import { useState,useEffect } from 'react'
import { CreateToDo } from './components/CreateToDo'
import { Todorenderer } from './components/Todorenderer'
function App() {

  const [todos,setTodos] = useState([])

  function addTodo(todo){
      setTodos([...todos,todo])
  }

  useEffect(()=>{
    fetch("http://localhost:3000/getTodos")
    .then(async function(response){
      const data = await response.json();
      setTodos(data)
    })
  },[])

  return (
    <>
    <div style={{height:"100vh"}}>
      <CreateToDo addTodo={addTodo} setTodos={setTodos}/>
      <Todorenderer todos={todos} />
    </div>
     
    </>
  )
}

export default App
