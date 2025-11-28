import {React,useState} from 'react'



const Input =()=>{
    const [text,setText] = useState("")


    return (
        <>
            <input value={text} onChange={(event)=>{
                setText(event.target.value)
            }}></input>
            <h3>You typed: {text}</h3>
        </>
    )
}



export default Input

