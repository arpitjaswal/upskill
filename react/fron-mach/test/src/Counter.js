import {React,useState} from "react";




const Counter = ()=>{
    const [count,setCount] = useState(0);
    return (
        <>
        <h6>You clicked {count} times!</h6>
        <button onClick={()=>{
            setCount(count+1);
        }}>click me</button>
        </>
    )
}

export default Counter;