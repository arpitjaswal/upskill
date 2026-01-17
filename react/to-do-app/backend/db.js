import mongoose from "mongoose"


mongoose.connect("mongodb+srv://admin:admin@cluster0.aftenfl.mongodb.net/todos")
const toDoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const toDoModel = mongoose.model("todo",toDoSchema)

export default toDoModel