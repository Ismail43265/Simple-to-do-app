import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle]=useState("");
    const [discription,setDiscription]=useState("");

    return <div>
        <input style={{
            padding: 10,
            margin: 10 
        }} type="text" placeholder="Todo" onChange={function(e){
            const value=e.target.value;
            setTitle(e.target.value);
        }}/> <br />
        <input style={{
            padding: 10,
            margin: 10 
        }}type="text" placeholder="Discription" onChange={function(e){
            const value=e.target.value;
            setDiscription(e.target.value);
        }}/> <br />

        <button style={{
            padding: 10,
            margin: 10 
        }} onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title:title,
                    discription:discription
                }),
                headers:{
                    "Content-type": "application/json"
                }
            })
            .then(async function(res){
                const json= await res.json();
                alert("Todo added");
            })
        }}>Add to do</button>
    </div>
}