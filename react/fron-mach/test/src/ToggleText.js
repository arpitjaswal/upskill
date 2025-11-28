import React,{useState} from 'react'



const ToggleText = ()=>{
    const text = "Secret Text"
    const [show,setShow] = useState(false);

    return (
        <>
        <button onClick={()=>{
                        setShow(!show)
                    }}>{show==true?"Hide":"Show"}</button>
            {
                show &&
                <div>
                    <h1>{text}</h1>
                </div>
            }
        </>
    )
}

export default ToggleText;
