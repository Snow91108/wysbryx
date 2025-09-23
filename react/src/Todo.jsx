import {useState} from "react";


function Todos() {
    const [todos, setTodos]=useState([{
        title: "Gym",
        description: "go to gym at 6:00 AM",
        completed: false
    },{
        title: "study",
        description: "Study from 9:00 AM",
        completed: true
    }])

    function addTodo() {
        setTodos([...todos, {
            title:"new Todo",
            description:"desc of new Todo"
        }])
    }

    return(
        <div>
            <button onClick={addTodo}>Add a rondom todo</button>
            {/* <Todo title={todos[0].title} description={todos[0].description} />
            <Todo title={todos[1].title} description={todos[1].description} /> */}
            {todos.map(function(todo){
                    return <Todo title={todo.title} description={todo.description} />
                })
            }
         </div>
    );
}


    function Todo(props) {
        return <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
        </div>
    }

export default Todos