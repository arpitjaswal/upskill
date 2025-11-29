import React,{useState} from 'react';


const ChildComponent = ({onIncrement})=>{
    return (
        <>
        <button onClick={onIncrement}>Increase Count</button>
        </>
    )
}


export default ChildComponent;