import express from 'express'


const app = express();


app.use(express.json());






//server listening on a port
app.listen(1234,()=>{
    console.log("server is listening on 1234")
})