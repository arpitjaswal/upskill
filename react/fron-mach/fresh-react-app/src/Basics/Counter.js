import React,{useState} from 'react';


const Counter = ()=>{
    const [count,setCount] = useState(0);
    return(
        <>
            <div style={{padding:"10px",margin:"20px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",border:"2px black solid",backgroundColor:"lightgray"}}>
                <h6>Question 1.</h6>
                <h6>{count}</h6>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
             <button onClick={()=>{
                setCount(prev=>prev+1)
            }}>Increment</button>
            <button style={{marginLeft:"20px"}} onClick={()=>{
                setCount(prev=>prev-1)
            }}>Decrement</button>
           </div>
            </div>
        </>
    )
}

export default Counter;