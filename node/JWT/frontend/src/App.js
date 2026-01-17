import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  return (
   <>
      <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div style={{border:"5px red solid",height:"50vh",width:"30vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div>
                  <label>Username</label>
                    <input value={username} style={{marginLeft:"10px"}} onChange={(e)=>{
                        setUsername(e.target.value)
                    }}></input>
                </div>
                <div>
                  <label>Password</label>
                     <input value={password} style={{marginLeft:"15px"}} onChange={(e)=>{
                        setPassword(e.target.value)
                    }}></input>
                </div>
                <br/>
                <button onClick={()=>{
                  console.log("username is:",username)
                  console.log('Password is:',password)
                  setPassword("")
                  setUsername("")
                }}>
                  Login
                </button>
          </div>
      </div>
   </>
  );
}

export default App;
