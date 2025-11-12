import express from "express";
import bcrypt, { hash } from "bcrypt"
import mysql from "mysql2/promise"
import jwt from "jsonwebtoken"

const PORT = 3000;
const SECRET ="AMMA"
const app = express();
app.use(express.json());

//i think how many times i want the hashing to be salted for making it more secure
const saltRounds = 10;


//db connection
const connection = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"notes"
})



app.post('/register',(req,res)=>{
    const username = req.body.username;
    const plainPassword = req.body.password;

    bcrypt.hash(plainPassword,saltRounds,async (err,hash)=>{
        let token;
        await jwt.sign({username:username,password:plainPassword},SECRET,{algorithm:'HS256',expiresIn:'1h'},(err,t)=>{
            console.log(token+" "+err)
            if(t){
                token=t;
            }
            console.log(err)
            
        })

        const [results,stuff]=await connection.query(`insert into users (username, hashedPassword,created_at,token) values ('${username}','${hash}',CURRENT_TIMESTAMP,'${token}')`)
        console.log(results)
        return res.status(200).json({user:results[0],token:token});
    })
})

app.post('/login',async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const [results,stuff] = await connection.query(`select * from users where username='${username}'`)
    const hashedPassword = results[0].hashedPassword;
    const token = results[0].token;
    const decoded = jwt.verify(token,SECRET,{algorithms:['HS256']});
    console.log(decoded);
    bcrypt.compare(password,hashedPassword,(err,result)=>{
        if(result===true){
            return res.status(200).json({status:"login successful", user:results[0]});
        }else{
            return res.status(200).json({error:err,message:"invalid credentials/user not found"});
        }
    })
})

app.listen(PORT,()=>{
    console.log("backend is running on "+PORT);
})