import React, { useState } from 'react'


const ToDoList = () => {
    const [text, setText] = useState("")
    const [todos, settodos] = useState([]);


    const addToDo = () => {
        if (!text.trim) return;
        const newToDo = [...todos, {
            id: Date.now(),
            text: text
        }]
        settodos(newToDo)
        setText("")
    }
    const deleteToDo = (id) => {
        settodos(todos.filter(x => {
            return x.id != id
        }))
    }

    return (
        <>
            <input value={text} onChange={(event) => {
                setText(event.target.value)
            }}></input>
            <button onClick={addToDo}>Add</button>
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        {todo.text}
                            <button onClick={()=>deleteToDo(todo.id)}>Delete</button>
                        
                    </div>
                )
            })}
        </>
    )
}

export default ToDoList