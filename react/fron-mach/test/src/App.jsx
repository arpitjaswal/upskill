import React,{lazy,Suspense,useState} from 'react';
import { Routes,Route,Link,useNavigate } from 'react-router-dom';
import Users from "./Users"
import User from "./UserDetails"
import Home from "./HomePage"
import PrivateRoutes from "./PrivateRoutes"
import Login from './Login';
function App(){
    const navigate = useNavigate();
    const goToApp = ()=>{
                navigate("/home")
            }

    const About = lazy(()=> import ("./About"))
    return (
        <>
        
 <button onClick={goToApp}>GO TO  APP</button>
        
      <Link to="/home">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/users">Users</Link>
       <Suspense fallback={<div>aaja mahi...</div>}>
        <Routes>
            <Route path='/login' element={<Login/>}/>

             <Route element={<PrivateRoutes/>}>
                   <Route path='/home' element={<Home/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/user' element={<User/>}/>
             <Route path='/user/:id' element={<User/>}/>
           
                <Route path='/about' element={<About/>}/>
            
             </Route>
        </Routes>
        </Suspense>
        </>
    )
}


export default App;