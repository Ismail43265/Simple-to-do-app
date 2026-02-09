const mongoose=require("mongoose");

mongoose.connect("mongodb+srv:///test")
.then(() => console.log("DB connected"))
.catch(err => console.log("DB error:", err));

const todoSchema= mongoose.Schema({
    title: String,
    discription: String,
    completed: Boolean
})

const todo=mongoose.model('todos', todoSchema);

module.exports={
    todo: todo
}