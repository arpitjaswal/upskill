import {React,useState} from 'react';
import { Routes,Route,Link,useNavigate } from 'react-router-dom';
import Users from "./Users"
import User from "./UserDetails"
import About from "./About"
import Home from "./HomePage"

function App(){
    const navigate = useNavigate();
    const goToApp = ()=>{
                navigate("/home")
            }
    return (
        <>
        
 <button onClick={goToApp}>GO TO  APP</button>

      <Link to="/home">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/users">Users</Link>
        <Routes>
            <Route path='/login' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/user' element={<User/>}/>
             <Route path='/user/:id' element={<User/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        </>
    )
}


export default App;