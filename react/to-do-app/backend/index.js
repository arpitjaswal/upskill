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
    console.log(payLoadFromFrontend)
    const safePayLoad = createToDo.safeParse(payLoadFromFrontend)
    console.log(safePayLoad)
    if(!safePayLoad.success){
        return res.status(411).json({
            msg:"body is not correct."
        })
    }
    
    await toDoModel.create({
        title: safePayLoad.data.title,
        description: safePayLoad.data.description,
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
app.put("/markAsDoneToDo",async (req,res)=>{
    await toDoModel.findOneAndUpdate({
        _id:req.body._id
    },{
        completed:true
    })
    return res.status(200).json({
        msg:"the todo was updated."
    })
})

app.listen(3000,()=>{
    console.log("server is running on 3000.")
})

