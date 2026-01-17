//write boiler code of express
//with express.json middlewaren code
import express from "express"
import {createToDo,updateToDo} from "./types.js"
import toDoModel from "./db.js";

const app = express();
app.use(express.json());

//get the todos
app.get("/getToDos",async (req,res)=>{
    const todos = await toDoModel.find({})
    return res.status(200).json(todos)
})


//create a new todo
app.post("/createToDo", async (req,res)=>{
    const payLoadFromFrontend = req.body;
    const safePayLoad = createToDo.safeParse(payLoadFromFrontend)
    if(!safePayLoad.success){
        return res.status(411).json({
            msg:"body is not correct."
        })
    }
    
    await toDoModel.create({
        title: safePayLoad.title,
        description: safePayLoad.description,
        completed: false
    })

    return res.status(200).json({
        msg: "to do created"
    })
})


//delete todo
app.delete("deleteToDo",(req,res)=>{

})

//update todo
app.put("markAsDoneToDo",async (req,res)=>{
    const reqBody = req.body;
    const safePayLoad = updateToDo.safeParse(reqBody)
    if(!safePayLoad.success){
        return res.status(411).json({
            msg:"the body is not correct"
        })
    }
    
    await toDoModel.update({
        _id:req.body.id
    },{
        title:safePayLoad.title,
        description:safePayLoad.description,
        completed:true
    })
    return res.status(200).json({
        msg:"the todo was updated."
    })
})

app.listen(3000,()=>{
    console.log("server is running on 3000.")
})

