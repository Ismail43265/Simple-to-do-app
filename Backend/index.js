const express=require("express");
const { createTodo, updateTodo }= require("./types")
const { todo }= require("./Db");
const app=express();
app.use(express.json());

app.post("/todo", async function(req,res){
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg: "You send Wront inputs"
        })
    }

    // save it to mongoDb
    await todo.create({
        title: createPayload.title,
        discription: createPayload.discription
    })

    res.json({
        msg: "todo Created"
    })
})

app.get("/todos", async function(req,res){
    const todos= await todo.find({});
    res.json({
        todos
    })

})

app.put("/complete", async function(req,res){
    const updateTodoPayload=req.body;
    const parseUpdate=updateTodo.safeParse("updateTodoPayload");

    if(!parseUpdate.success){
        res.status(411).json({
            msg: "You put the wrong inputs"
        })
    }

    // update in mongo
    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);