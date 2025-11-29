import  React,{useState,useCallback} from 'react';
import ChildMemo from './ChildMemo';



const ParentMemo = ()=>{
    const [count, setCount] = useState(0);
    const [text,setText] = useState("");


    const increment = useCallback(()=>{
        
        setCount(count=>count+1)
        console.log(count)
    },[])

    return (
        <>
            <input value={text} onChange={(event)=>{
                setText(event.target.value)
            }}>
              
            </input>

            <button onClick={()=>{
                
                setCount(count=>count+1)
                console.log(count)
            }}>
                    Increment Count
            </button>
            <ChildMemo incrementMe={increment}/>
        </>
    )


}

export default ParentMemo