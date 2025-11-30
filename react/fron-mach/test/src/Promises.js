import React, {useEffect, useState} from 'react'


const Promises = ()=>{

    
    useEffect(()=>{
        async function fetchAll(){

        function fetchA(){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                return resolve("first fetch")
            },1000)
            })
        }

         function fetchB(){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                return resolve("second fetch")
            },1000)
            })
        }

         function fetchC(){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                return resolve("third fetch")
            },1000)
            })
        }
        
        const [result1,result2,result3] = await Promise.all([fetchA(),fetchB(),fetchC()])
        console.log(result1);
        console.log(result2);
        console.log(result3);
        const [result4,result5,result6] = await Promise.allSettled([fetchA(),fetchB(),fetchC()])
        console.log(result4);
        console.log(result5);
        console.log(result6);
        const result7 = await Promise.race([fetchA(),fetchB(),fetchC()])
        console.log(result7);
        const result10 = await Promise.any([fetchA(),fetchB(),fetchC()])
        console.log(result10);
    }
    fetchAll()
    },[])

    return(
        <>
            <p>Promise.all</p>

        </>
    )
}

export default Promises;