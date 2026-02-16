import { useState } from "react"

export function CreateToDo({addTodo,setTodos}){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return <div style={{display:"flex",justifyContent:"center",
    alignItems:"center",height:"30vh",
    flexDirection:"column"}}>
        <input type="text" value={title} placeholder="enter the title" onChange={(e)=>{
            setTitle(e.target.value)
        }}></input>
        <br/>
        <input type="text" value={description} placeholder="enter the description" onChange={(e)=>{
            setDescription(e.target.value)
        }}></input>
        <br/>
        <button onClick={()=>{
            fetch("http://localhost:3000/createToDo",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    title:title,
                    description:description,
                    completed: false
                })
            })
            .then(function(res){
                console.log(res)
            })
            setTodos(prev=>[...prev,{
                    title:title,
                    description:description,
                    completed: false
                }])
            setTitle("")
            setDescription("")
        }}>Add To Do</button>
    </div>
}