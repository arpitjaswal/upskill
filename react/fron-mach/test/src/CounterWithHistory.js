import React, {useState} from 'react';


const CounterWithHistory = ()=>{
    const [count,setCount] = useState(0);
    const [history,setHistory] =useState([0])
    return(
        <>
            {
                history.map(count=><h6>{count}</h6>)
            }
            {
                <h1>{count}</h1>
            }
            <button onClick={()=>{
                setHistory(prev=>[...prev,count+1])
                setCount(count=>count+1);
            }}>Increment</button>
            <br/>
             <button onClick={()=>{
                setHistory(prev=>[...prev,count-1])
                const newCount = count-1;
                setCount(count=>newCount);
            }}>Decrement</button>
            <br/>
             <button onClick={()=>{
                
                setHistory(prev=>{
                    if(prev.length <= 1)return prev;

                    const updated = prev.slice(0,-1);
                    setCount(updated[updated.length-1] || 0);
                    return updated;
                })
                
            }}>Undo</button>
        </>
    )
}

export default CounterWithHistory;