import {React,useState} from 'react';


function App(){
    const [count,setCount] = useState(0)

    return (
        <>
        <h1>You clicked {count} times</h1>
        <button onClick={()=>{
            setCount(count+1)
        }}>click me</button>
        </>
    )
}


export default App;