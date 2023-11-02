/* eslint-disable react/jsx-key */
import TodoItem from "./TodoItem";
import todos from "./todos.json";
import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todosReducer);

 return(
   <>
     <h3>Todo List</h3>
     <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
     <ul className="list-group">
       {
         todos.map(todo => {
           return(<TodoItem todo={todo}/>);
         })
       }
     </ul>
   </>
 );
}
export default TodoList;