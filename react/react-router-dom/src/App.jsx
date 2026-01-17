import {useState,useContext} from "react"
import './App.css'
import { CountContext } from "./context";

function App() {
  const[count,setCount] = useState(0);
  return (
   <>
   <CountContext.Provider value={{count,setCount}}>
    <Count/>
   </CountContext.Provider>
   
  
   </>
  )
}


function Count(){
    return<div>
      <CountRenderer/>
      <Buttons/>
    </div>
}

function CountRenderer(){
  const countContext = useContext(CountContext)
  return<div>
<h1>Count: {countContext.count}</h1>
  </div>
}

function Buttons(){
  const countContext = useContext(CountContext)
  return<div>
    <button onClick={()=>{
      countContext.setCount(prev=>prev+1)
    }}>Increase</button>
    <button onClick={()=>{
      countContext.setCount(prev=>prev-1)
    }}>Decrease</button>
  </div>
}
export default App
