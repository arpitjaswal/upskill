import React,{useState,useEffect} from 'react'


const SearchAndPagination = ()=>{
    const [data,setData] = useState([]);
    const [paginatedData,setPaginatedData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    //pagination
    const [currentPage,setCurrentPage] = useState(1);
    const usersPerPage = 5;

    //text
    const[text,setText] = useState("")

    const indexOfLast = Math.ceil(currentPage*usersPerPage);
    const indexOfFirst = indexOfLast-usersPerPage

    
    useEffect(()=>{
        let mount=true;
        async function fetchData(){
        try{
            const data = await fetch('https://dummyjson.com/users')
            if(!data.ok)throw new Error("failed to fetch data")
            const jsonData = await data.json();
            if(mount){
                setData(jsonData.users);
                setPaginatedData(jsonData.users.slice(indexOfFirst,indexOfLast));
                setFilteredData(jsonData.users.slice(indexOfFirst,indexOfLast));
            }
            
        }catch(error){
            if(mount){
                setError(error.message);
            }
        }finally{   
            if(mount){
                setLoading(false);
            }
        }
    }
        fetchData();
        return ()=>{
            mount=false;
        }
    },[])

    useEffect(()=>{
        setPaginatedData(data.slice(indexOfFirst,indexOfLast));
        setFilteredData(data.slice(indexOfFirst,indexOfLast));
    },[currentPage])

    useEffect(()=>{
        let timer;
        const debounce = (text,delay)=>{
            if(!text.trim()){
                setFilteredData(paginatedData)
                return;
            }
            timer = setTimeout(()=>{
                console.log(paginatedData)
                const fil = paginatedData.filter(element=>(element.firstName.toLowerCase().includes(text.toLowerCase())
            || element.lastName.toLowerCase().includes(text.toLowerCase())))
                setFilteredData(fil)
            },delay)
        }
        debounce(text,500)
        return ()=>{
            clearTimeout(timer)
        }
    },[text])

    if(data.length==0 && loading==false){
        return(
            <> 
                <h1>No users found!</h1>
            </>
        )
    }
    if(loading){
        return(
            <> 
                <h1>Loading...</h1>
            </>
        )
    }
     if(error){
        return(
            <> 
                <h1>{error}</h1>
            </>
        )
    }
    return(
        <>
           <div style={{display:"flex",justifyContent:"center",flexDirection:"column",border:"2px black solid"}}>
             <input placeholder='search here...' value={text} onChange={(event)=>{
                setText(event.target.value)
             }}></input>
            <div style={{height:"200px"}}>
            {
                filteredData.map(user=><div key={user.id} style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"4vh"}}>
                    <h6>{user.firstName}{" "}{user.lastName}</h6>
                </div>)
            }
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"rows",}}>
 <button 
            disabled={currentPage===1?true:false}
            onClick={()=>{
                setCurrentPage(prev=>prev-1)
            }}> Prev</button>
            <button 
            disabled={currentPage>=Math.ceil(data.length/usersPerPage)?true:false}
            onClick={()=>{
                setCurrentPage(prev=>prev+1)
                
            }}> Next </button>
            <button 
            disabled={currentPage===1?true:false}
            onClick={()=>{
                setCurrentPage(prev=>1);
            }}>First</button>
            <button 
            disabled={currentPage>=Math.ceil(data.length/usersPerPage)?true:false}
            onClick={()=>{
                console.log(Math.ceil(data.length/usersPerPage))
                setCurrentPage(prev=>Math.ceil(data.length/usersPerPage));
            }}>Last</button>
            </div>
           
            </div>
           </div>
        </>
    )
}

export default SearchAndPagination;