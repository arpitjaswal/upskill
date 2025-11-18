import express from "express"
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise"


const app = express();
app.use(express.json());


const pool = mysq


//register
app.post('/register',(req,res)=>{


    try {
        const email  = req.body.email;
        const password = req.body.password;
        

    } catch (error) {
        console.log("encountered this error "+error);
        return res.status(500).json({status:"failure",message:error.message});
    }
})











app.listen(4444,()=>[
    console.log("server is listenign on 4444")
])