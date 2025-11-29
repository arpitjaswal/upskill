import React,{useState} from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = ()=>{
    const [count,setCount] = useState(0)
    function onIncrement(){
        setCount(count=>count+1)
    }
    return (
        <>
            <h2>Count is: {count}</h2>
            <ChildComponent onIncrement={onIncrement}/>
        </>
    )
}

export default ParentComponent;