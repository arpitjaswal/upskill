import React,{useState,createContext} from "react";

export const CounterContextMain = createContext(null);


export const CounterContext = ({props})=>{
    const [count,setCount] = useState(0);
    console.log(props)
    return(
        <>
        <CounterContextMain value={{count,setCount}}>
            {props.children}
        </CounterContextMain>
        </>
    )
}