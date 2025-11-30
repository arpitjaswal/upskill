import React,{useState,useEffect} from 'react';



const ToDoApp = ()=>{
    const [text,setText] = useState("");
    const [toDos,setToDos] = useState(JSON.parse(localStorage.getItem("todos"))||[]);

    //use Effect to update
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(toDos));
    }, [toDos]);

    //changing text in input
    const changingText = (event)=>{
            setText(event.target.value)
    }

    //delete to do 
    const deleteToDo = (id)=>{
                setToDos(prev=>prev.filter(t=>t.id!=id))
    }

    //add to do new
    const addToDo = ()=>{
            setToDos(prev=>[...toDos,{
                id:Date.now(),
                text:text,
                completed:false
            }]);
            setText("");
        }
    return(
        <>
        <p><span><input placeholder="write todo here, cutie!" value={text} onChange={changingText}></input><button onClick={addToDo}>Add To Do</button></span>
            
        </p>
        {
            toDos.map(todo=><div style={{textDecoration:todo?.completed?"line-through":"none"}} key={todo?.id}>{todo?.text}<span>{" "}</span><button onClick={()=>{
                setToDos(toDos?.map(todosingle=>{
                     if(todosingle.id===todo.id){
                        return {...todosingle,completed:!todosingle.completed}
                     }else{
                        return todosingle
                     }
                }))
            }}>{todo?.completed?"Undo":"Done"}</button><span>{" "}</span><button onClick={()=>deleteToDo(todo.id)}>Delete</button></div>)
        }
        </>
    )
}

export default ToDoApp