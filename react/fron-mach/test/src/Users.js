import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";


const Users =()=>{
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{

        const fetchData = async ()=>{
            try{
                const data = await fetch('https://jsonplaceholder.typicode.com/users')
            if(!data.ok)throw new Error("problem with fetch")
            const jsonData = await data.json();
            setData(jsonData)
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false);
            }
        }
        
        fetchData();

        return ()=>{

        }
        
    },[])
    if(loading){
        return (
            <>
            Loading.....
            </>
        )
    }
    return(
        <>
        
            {data.length>0 && data.map((user)=><div key={user.id}>{user?.name}<Link to={`/user/${user?.id}`} state={user}>Click me!</Link></div>
            )}
        </>
    )

}

export default Users;