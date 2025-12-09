import React,{useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import { useTheme } from "./ContextAPI";

const User =()=>{
    const [user,setUser] = useState({});
    const {id} = useParams();
    console.log(id)
    useEffect(()=>{
        async function fetchData(){
            try{    
                const userData = await fetch('https://dummyjson.com/users/'+id)
                if(!userData.ok)throw new Error("failed to fetch")
                const jsonData = await userData.json();
                setUser(jsonData)
            }catch(error){

            }finally{

            }
        }
        fetchData();
    },[])
    const {theme,toggleTheme} = useTheme();
    console.log(theme)
    toggleTheme();
    console.log(theme)
    return(
        <>
            <div>
                <h1>Name: {user.firstName}{" "}{user.lastName}</h1>
                <h1>Email: {user.email}</h1>
                <h1>Age: {user.age}</h1>
                <button onClick={toggleTheme}>toggle theme</button>
            </div>
        </>
    )
}

export default User