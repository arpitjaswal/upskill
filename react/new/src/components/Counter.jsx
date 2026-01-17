import React from "react"
const Counter = ({setCount})=>{
    return(
        <>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <button onClick={()=>{
                    setCount(prev=>prev+1);
                }}>Increase</button>
            </div>
        </>
    )


}

export default Counter;