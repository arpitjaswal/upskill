import {React,useEffect,useState} from 'react'


const TestingUseEffect =()=>{
    const [count,setCount] = useState(0);


    useEffect(()=>{
        console.log("re-renders on every change")
    })

    useEffect(()=>{
        console.log("renders only once because has dependency array as empty")
    },[])

    useEffect(()=>{
        console.log("component mounted")

        return ()=>{
            console.log("component unmounted")
        }
    },[])
    return (

        <>
            <h3>testing clicks</h3>
            <button onClick={()=>{
                setCount(count+1);
            }}>click me</button>
        </>
    )
}

export default TestingUseEffect