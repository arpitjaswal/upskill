import express from 'express';
import mysql from "mysql2";

const app = express();



const pool = mysql.createPool({
    user:"root",
    password:"password",
    host:"localhost",
    connectionLimit:10,
    waitForConnections:true,
    maxIdle:60000
})






const PORT=3000;

//get users with async function

app.get("/whereTheUsersAt",async (req,res)=>{
    

    try {
        const users = await pool.execute(query);
        console.log(users)
    } catch (error) {
        console.log("not able to fulfil ur request, got this error "+error);
    }
})


app.listen(PORT, ()=>{
    console.log("server is listening on "+PORT);
})