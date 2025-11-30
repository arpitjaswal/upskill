import React, {useState,useEffect} from 'react';



const UserListNew = ()=>{
    const [data,setData] = useState([]);
    const [allData,setAllData] = useState([])
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    //pagination
    const [currentPage,setCurrentPage] = useState(1);
    const usersPerPage = 5;

   

    useEffect(()=>{
        let mount=true;
        async function fetchData(){

            try{
                const data = await fetch('https://dummyjson.com/users')
                if(!data.ok)throw new Error("Failed to fetch data")
                const jsonData = await data.json();
                console.log(jsonData.users)
                if(mount){
                    setAllData(jsonData.users)
                    const data = jsonData.users.slice(0,5)
                    setData(data)
                }
            }catch(error){
                if(mount){
                    setError(error.message)
                }
            }finally{
                setLoading(false);
            }
        }
        fetchData();
        return ()=>{
            mount=false;
        }
    },[])
    let indexOfLast = currentPage * usersPerPage;
    let indexOfFirst = indexOfLast-usersPerPage;
   
    useEffect(()=>{
     indexOfLast = currentPage * usersPerPage;
     indexOfFirst = indexOfLast-usersPerPage;
    const data2 = allData.slice(indexOfFirst,indexOfLast);
    setData(data2)
    },[currentPage])
    
    if(error){
        return(
            <>
                <h3>Failed to fetch data.</h3>
            </>
        )
    }
    if(loading){
        return(
            <>
                <h3>Loading...</h3>
            </>
        )
    }
    return(
        <>  
            {
                data.length>0 && data.map(user=><div>
                        <h6>{user?.firstName}{" "}{user?.lastName}</h6>
                </div>)
            }
            <button 
            disabled={currentPage===1?true:false}
            onClick={()=>{
                setCurrentPage(currentPage-1)
            }}>Prev</button>
            <button 
            disabled={currentPage>=Math.ceil(allData.length / usersPerPage)}
            onClick={()=>{
                setCurrentPage(currentPage+1)
            }}>Next</button>
            <button 
            disabled={currentPage===1?true:false}
            onClick={()=>{
                setCurrentPage(1)
            }}>First</button>
             <button 
            disabled={currentPage===Math.ceil(allData.length/usersPerPage)?true:false}
            onClick={()=>{
                setCurrentPage(Math.ceil(allData.length/usersPerPage))
            }}>Last</button>
        </>
    )

}

export default UserListNew;