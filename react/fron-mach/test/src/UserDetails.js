import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";



const UserPage = ()=>{
    const [userData,setUserData] = useState();
    const [error,setError] = useState();
    const [loading,setLoading] = useState();
    const {id} = useParams();
      useEffect(()=>{
    
            const fetchData = async ()=>{
                try{
                    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                if(!data.ok)throw new Error("problem with fetch")
                const jsonData = await data.json();
                setUserData(jsonData)
                }catch(error){
                    setError(error.message)
                }finally{
                    setLoading(false);
                }
            }
            
            fetchData();
    
            return ()=>{
    
            }
            
        },[id])
        return (
            <>
                <p>Name: {userData?.name}</p>
                <br/>
                <p>Email: {userData?.email}</p>
                <br/>
                <p>Address: {"tera ghar"}</p>

            </>
        )
}

export default UserPage;