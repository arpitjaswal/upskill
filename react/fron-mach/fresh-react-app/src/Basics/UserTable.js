import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const UserTable = ()=>{
    const [users,setUsers] = useState([]);
    const [paginatedUsers,setPaginatedUsers] = useState([])
    const [filteredUsers,setFilteredUsers]= useState([])
    const [error,setError] = useState(null);
    const [loading,setLaoding] = useState(true);
    const [sortName,setSortName] = useState("")
    const [sortAge,setSortAge] = useState("")
    const [sortEmail,setSortEmail] = useState("")
    const [currentActive, setCurrentActive] = useState()
    //search
    const[text,setText] = useState("");

    //pagination
    const [currentPage,setCurrentPage] = useState(1);
    const usersPerPage = 5;

    const indexOfLast = currentPage*usersPerPage;
    const indexOfFirst = indexOfLast-usersPerPage;

    const navigate = useNavigate();


    useEffect(()=>{
        
        let mount=true;

        async function fetchUsers(){
            try{
                const data = await fetch('https://dummyjson.com/users')
                if(!data.ok)throw new Error("failed to fetch data")
                const jsonData = await data.json();
                if(mount){
                    console.log(jsonData.users)
                    setUsers(jsonData.users)
                    const paginated = jsonData.users.slice(indexOfFirst,indexOfLast)
                    setPaginatedUsers(paginated)
                     setFilteredUsers(paginated)
                }
            }catch(error){
                if(mount){
                    setError("failed to fetch")
                }
            }finally{
                if(mount){
                    setLaoding(false)
                }
            }
        }

        fetchUsers()
        return ()=>{
            mount=false;
        }
    },[])

    useEffect(()=>{
        let paginated = users.slice(indexOfFirst,indexOfLast)
        console.log(sortEmail)
        if(sortName==="asc" || sortName==="des"){
           
        if(sortName==="asc"){
             paginated.sort((a,b)=>a.firstName.localeCompare(b.firstName))
             setPaginatedUsers(paginated)
        console.log(paginated)
        const arrayFilter = paginated.filter(user=>(user.firstName.toLowerCase().includes(text.toLowerCase())|| user.lastName.toLowerCase().includes(text.toLowerCase())));
        setFilteredUsers(arrayFilter)
        }
        if(sortName==="des"){
            paginated.sort((a,b)=>b.firstName.localeCompare(a.firstName))
            setPaginatedUsers(paginated)

        const arrayFilter = paginated.filter(user=>(user.firstName.toLowerCase().includes(text.toLowerCase())|| user.lastName.toLowerCase().includes(text.toLowerCase())));
        setFilteredUsers(arrayFilter)
        }
         
        }else if(sortAge==="asc" || sortAge==="des"){
           
        if(sortAge==="asc"){
             paginated.sort((a,b)=>a.age-b.age)
             setPaginatedUsers(paginated)
        console.log(paginated)
        const arrayFilter = paginated.filter(user=>(user.firstName.toLowerCase().includes(text.toLowerCase())|| user.lastName.toLowerCase().includes(text.toLowerCase())));
        setFilteredUsers(arrayFilter)
        }
        if(sortAge==="des"){
            paginated.sort((a,b)=>b.age-a.age)
            setPaginatedUsers(paginated)

        const arrayFilter = paginated.filter(user=>(user.firstName.toLowerCase().includes(text.toLowerCase())|| user.lastName.toLowerCase().includes(text.toLowerCase())));
        setFilteredUsers(arrayFilter)
        }
         
        }
        else if(sortEmail==="asc" || sortEmail==="des"){
           
        if(sortEmail==="asc"){
            paginated.sort((a,b)=>a.email.localeCompare(b.email))
            setPaginatedUsers(paginated)
            console.log(paginated)
            const arrayFilter = paginated.filter(user=>(user.firstName.toLowerCase().includes(text.toLowerCase())|| user.lastName.toLowerCase().includes(text.toLowerCase())));
            setFilteredUsers(arrayFilter)
        }
        if(sortEmail==="des"){
            paginated.sort((a,b)=>b.email.localeCompare(a.email))
            setPaginatedUsers(paginated)

            const arrayFilter = paginated.filter(user=>(user.firstName.toLowerCase().includes(text.toLowerCase())|| user.lastName.toLowerCase().includes(text.toLowerCase())));
            setFilteredUsers(arrayFilter)
        }
         
        }
        else{
        setPaginatedUsers(paginated)
        const arrayFilter = paginated.filter(user=>(user.firstName.toLowerCase().includes(text.toLowerCase())|| user.lastName.toLowerCase().includes(text.toLowerCase())));
        setFilteredUsers(arrayFilter)
        }
      
       

    },[currentPage,text,sortName,sortAge,sortEmail])

    if(error){
        return(
            <>
                <h3 style={{color:"red"}}>Error:{error}</h3>
            </>
        )
    }
 if(loading){
        return(
            <>
                <div
                style={{margin:"auto",padding:"auto",display:"flex",flexDirection:"column",alignItems:"center"}}
                >Loading...</div>
            </>
        )
    }
    return(
        <>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <input style={{ width:"70vw"}} placeholder="search term here..." value={text} onChange={(event)=>{
                    setText(event.target.value);
                }}></input>
                <button onClick={()=>{
                    setText("")
                    setSortAge("")
                    setSortEmail("")
                    setSortName("")
                    setCurrentPage(1)
                }}>Reset Filters</button>
                <br/>
                <table style={{border:"2px solid black",width:"80vw"}}>
                <thead >
                    <tr >
                        <th>
                            Sr.
                        </th>
                            <th style={{cursor:"pointer"}} onClick={()=>{
                                setSortAge("");
                                setSortEmail("");
                                if(sortName==="asc"){
                                    setSortName("des");
                                }
                                if(sortName==="des"){
                                    setSortName("asc");
                                }
                                if(sortName===""){
                                    setSortName("asc");
                                }
                            }}>
                                {sortName==="asc"?"Name ▲ ":sortName==="des"?"Name ▼":"Name"}
                            </th>
                             <th style={{cursor:"pointer"}} onClick={()=>{
                                setSortName("");
                                setSortAge("");
                                if(sortEmail==="asc"){
                                    setSortEmail("des");
                                }
                                if(sortEmail==="des"){
                                    setSortEmail("asc");
                                }
                                if(sortEmail===""){
                                    setSortEmail("asc");
                                }
                            }}>
                                {sortEmail==="asc"?"Email ▲ ":sortEmail==="des"?"Email ▼":"Email"}
                            </th>
                             <th style={{cursor:"pointer"}} onClick={()=>{
                                setSortName("");
                                setSortEmail("");
                                if(sortAge==="asc"){
                                    setSortAge("des");
                                }
                                if(sortAge==="des"){
                                    setSortAge("asc");
                                }
                                if(sortAge===""){
                                    setSortAge("asc");
                                }
                            }}>
                                 {sortAge==="asc"?"Age ▲ ":sortAge==="des"?"Age ▼":"Age"}
                            </th>
                    </tr>
                   
                </thead>
                  <tbody>
               {
                filteredUsers.map(user=>(
                    
                    <tr key={user.id} onClick={()=>{
                        navigate("/user/"+user.id)
                    }}>
                        <td>
                            {user.id}
                        </td>
                        <td>
                           {user.firstName}{" "}{user.lastName}
                        </td>
                        <td>
                            {user.email}
                        </td>
                        <td>
                             {user.age}
                        </td>
                    </tr>
                   
                
                ))
               }
               { filteredUsers.length===0 &&
                
                   <tr>
                    <td>
                        No Record Found!
                    </td>
                   </tr>
               }
               </tbody>
            </table>
            <br/>
            <div>
                <h6>Page {currentPage} of {Math.ceil(users.length/usersPerPage)}</h6>
            </div>
            <br/>
            <div>
                <button
                disabled={currentPage==1?true:false}
                style={{marginLeft:"20px"}}
                onClick={()=>{
                    setCurrentPage(prev=>prev-1);
                }}
                >Prev</button>
                <button
                disabled={currentPage>=Math.ceil(users.length/usersPerPage)?true:false}
                onClick={()=>{
                    setCurrentPage(prev=>prev+1);
                }}
                 style={{marginLeft:"20px"}}
                >Next</button>
                <button
                disabled={currentPage==1?true:false}
                onClick={()=>{
                    setCurrentPage(prev=>1);
                }}
                 style={{marginLeft:"20px"}}
                >First</button>
                <button
                disabled={currentPage>=Math.ceil(users.length/usersPerPage)?true:false}
                onClick={()=>{
                    setCurrentPage(Math.ceil(users.length/usersPerPage));
                }}
                 style={{marginLeft:"20px"}}
                >Last</button>
            </div>
            </div>
        </>
    )
}

export default UserTable;