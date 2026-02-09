const express=require("express");
const app=express();
app.use(express.json());

app.post("/todo", async function(req,res){
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);

    if(!parsePayload.success){
        return res.status(411).json({
            msg: "You send wrong inputs"
        })
    }

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

})

app.put("/complete", async function(req,res){
    const updateTodoPayload=req.body;
    const parseUpdate=updateTodo.safeParse(updateTodoPayload);

    if(!parseUpdate.success){
        return res.status(411).json({
            msg: "You put the wrong inputs"
        })
    }
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);