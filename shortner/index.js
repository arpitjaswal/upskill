import express from 'express';
import urlRoutes from "./routes/url.js"
import connectToMongoDB from './connect.js';
import URL from "./models/url.js"
import {getAnalytics} from "./controllers/urlController.js"
const app = express();
const PORT = 3000;


app.use(express.json())
//dbconnection
connectToMongoDB('url/practice')
.then((res)=>{
    console.log(res)
    console.log("database connected")
})
.catch(error=>{
    console.log("error in connecting to the db"+error)
})

app.use("/url",urlRoutes)
// "/" endpoint
app.get("/",(req,res)=>{
    res.send(`<div style='height:90vh; display:flex; justify-content:center; align-items:center;'>running server at ${PORT}</div>`)
})

app.get("/:shortID", async (req,res)=>{
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortID
    },{
        $push:{
            visitHistory:{timestamp: Date.now()}
        }
    })
    res.redirect(entry.redirectURL)
})


app.get("/analytics/:id",getAnalytics)

//server listen on a specific port
app.listen(PORT,()=>{
    console.log(`Server is listening on port: ${PORT}`)
})