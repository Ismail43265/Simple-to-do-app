export function Todos({ todos, setTodos }) {

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h1>{todo.title}</h1>
          <h2>{todo.discription}</h2>

          <button
            onClick={() => {
            fetch("http://localhost:3000/complete", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: todo._id
                })
                })
                .then(() => {
                setTodos(prev =>
                    prev.map(t =>
                    t._id === todo._id
                        ? { ...t, completed: !t.completed }
                        : t
                    )
                );
                });
            }}

            style={{
                backgroundColor: todo.completed ? "green" : "gray",
                color: "white",
                padding: "6px 12px",
                borderRadius: "5px",
                border: "none"
            }}
            >
            {todo.completed ? "Completed" : "Complete"}
            </button>


        </div>
      ))}
    </div>
  )
}
