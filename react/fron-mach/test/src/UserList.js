import React,{useState,useEffect} from "react"


const UserList = ()=>{
    const [users,setUsers] = useState([])
    const [error,setError] = useState(false);
    useEffect(async ()=>{
        try{
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                    const userList = await users.json();
                    setUsers(userList)
                    console.log(userList)
        }catch(error){
            setError(true)
        }
    },[])
    if(error){
        return(
            <div>
                Somehting is wrong!!
            </div>
        )
    }
    return(
        <>
            {
                users.length>0?
                <div>
                    {users.map(element=>{
                        return(
                            <>
                            <p>{element.name}</p>
                            </>
                        )
                    })}
                </div>:
                <div>
                    Loading...
                </div>
            }
        </>
    )
}

export default UserList;