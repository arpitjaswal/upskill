import React,{useEffect, useState} from "react";


const Debounce = ()=>{
    const [text,setText] = useState("")
    const [filtered,setFiltered] = useState([])
    const fruits = ["Apple", "Banana", "Grapes", "Orange", "Papaya", "Mango"];

    useEffect(()=>{
        const timer = setTimeout(()=>{
            const result = fruits.filter(fruit=>{
                return fruit.toLowerCase().includes(text.toLowerCase())
            })
            setFiltered(result)
        },500)

        return ()=>{
            clearTimeout(timer)
        }
    },[text])
    return (


        <>
        
            <input value={text} placeholder="Search..." onChange={(event)=>{
                setText(event.target.value)
            }}></input>
            {
                filtered.map(x=><div key={x}>{x}</div>)
            }
        
        </>
    )
}

export default Debounce;