import express from 'express';
import mysql from "mysql2/promise";

const app = express();
app.use(express.json())


const pool = mysql.createPool({
    user:"root",
    password:"password",
    host:"localhost",
    connectionLimit:10,
    waitForConnections:true,
    maxIdle:60000
})


function rateLimiter(){
    let hits=0;

    return function(req,res,next){
        ++hits;
        if(hits>5){
             return res.status(429).json({status:"failure",message:"too many hits."})
        }
        next();
    }
}



const PORT=3001;



//async handler
const asyncHandler = fn=>(req,res,next)=>{
    Promise
        .resolve(fn(req,res,next))
        .catch(next)
}


//get users with async function

app.get("/whereTheUsersAt",rateLimiter(),asyncHandler(async (req,res)=>{
        const query = "select * from practice.users;"
        const [users,fields] = await pool.execute(query);
        return res.status(200).json({status:"success",data:users});
}))
//global error handler
app.use((err,req,res,next)=>{
    return res.status(500).json({status:"failed",error:err.message});
})


//register
app.post('/register',(req,res)=>{

})


app.listen(PORT, ()=>{
    console.log("server is listening on "+PORT);
})