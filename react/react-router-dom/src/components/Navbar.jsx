import { useNavigate } from "react-router-dom"
export function Navbar(){
    const navigate= useNavigate();
    return<div style={{backgroundColor:"red"}}>
       <button onClick={()=>{
            navigate("/");
       }}>Landing</button>
       <button onClick={()=>{
            navigate("/dashboard");
       }}>Dashboard</button>
    </div>
}