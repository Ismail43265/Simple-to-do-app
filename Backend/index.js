const express=require("express");
const { createTodo, updateTodo }= require("./types")
const app=express();
app.use(express.json());

app.post("/todo", function(req,res){
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg: "You send Wront inputs"
        })
    }

    // save it to mongoDb
})

app.get("/todos", function(req,res){

})

app.put("/complete", function(req,res){
    const updateTodoPayload=req.body;
    const parseUpdate=updateTodo.safeParse("updateTodoPayload");

    if(!parseUpdate.success){
        res.status(411).json({
            msg: "You put the wrong inputs"
        })
    }

    // update in mongo
})

app.listen(3000);