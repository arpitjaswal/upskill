

export function Todorenderer({todos}){
    return <>
    {
        todos && <div style={{  display:"flex", flexDirection:"column",
            height:"70vh",justifyContent:"start",alignItems:"center"}}>
            {
            todos.map(todo=><div>
                <h4>Title: {todo.title} </h4>
                <h4>Description: {todo.description}</h4>
                <button>{todo.completed?"Completed":"Pending"}</button>
                </div>)
        }
        </div>
    }
    </>
}