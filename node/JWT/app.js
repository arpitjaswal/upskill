import express from "express"
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise"
import bcrypt from "bcrypt"




const app = express();
app.use(express.json());


const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    connectionLimit:true,
})




const saltRounds = 10;

//register
app.post('/register',(req,res)=>{


    try {
        const email  = req.body.email;
        const password = req.body.password;
        const name = req.body.name;
        const [fname,lname]=name.split(" ");
        bcrypt.genSalt(saltRounds,function(err,salt){
            bcrypt.hash(password,salt,async function(err,hash){
                const query = `insert into users (fname,lname, hashed_password,type) values("${fname}","${lname}","${hash}","NormalUser")`
                await pool.execute(query);
                
            })
        })



    } catch (error) {
        console.log("encountered this error "+error);
        return res.status(500).json({status:"failure",message:error.message});
    }
})











app.listen(4444,()=>[
    console.log("server is listenign on 4444")
])