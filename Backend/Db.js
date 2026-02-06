const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://.mongodb.net/");

const todoSchema= mongoose.Schema({
    title: string,
    discription: string,
    Completed: Boolean
})

const todo=mongoose.model('todos', todoSchema);

module.exports={
    todo: todo
}