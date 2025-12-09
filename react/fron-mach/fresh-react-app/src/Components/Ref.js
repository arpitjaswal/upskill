import React,{useState,useRef} from "react"


const Ref = ()=>{
    const focusRef = useRef(null)
    return(
        <>
            <input ref={focusRef} placeholder="enter text here"></input>
            <button onClick={()=>{
                console.log(focusRef.current.style.backgroundColor="red")
            }}>Focus the Input</button>

        </>
    )
}

export default Ref