import React, {useState,useEffect} from 'react';




const useFetch = (url)=>{
   const [sendData, setSendData] = useState([]);
   const [error,setError] = useState(null);
   const [loading,setLoading] = useState(true);


   useEffect(()=>{
        let isMounted=true;
        const fetchData = async ()=>{

                try{
                    const data = await fetch(url)
                    if(!data.ok){
                        throw new Error("Failed to fetch")
                    }
                    const jsonData = await data.json();

                    if(isMounted){
                        setSendData(jsonData);
                    }
                }catch(error){
                    if(isMounted){
                        setError(error.message)
                    }
                }finally{
                    setLoading(false);
                }
        }
        fetchData();
        return ()=>{
            isMounted=false;
        }
   },[url])

   return {sendData,error,loading}
}

export default useFetch