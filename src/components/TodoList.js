import React from "react";
//import Components
import Todo from "./todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    console.log(todos)
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                     setTodos={setTodos}
                     todos={todos}
                     text={todo.text}
                     todo={todo}
                     key={todo.id} 
                     />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
