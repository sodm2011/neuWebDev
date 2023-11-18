import React, {useState} from "react";

function WorkingWithArrays() {
    const [todo, setTodo] = useState({
      id: 1,
      title: "NodeJS Assignment",
      description: "Create a NodeJS server with ExpressJS",
      due: "2021-09-09",
      completed: false,
    });

    const API = "http://localhost:4000/a5/todos";
    return (
      <div>
        <br/>
        <h3>Working with Arrays</h3>
        <h4>1. Retrieving Arrays</h4>
            <a href={API} className="btn btn-primary me-2">
            Get Todos
            </a>

        <h4>2. Retrieving an Item from an Array by ID</h4>
            <input
            className="form-control"
            value={todo.id}
            onChange={(e) => setTodo({ ...todo,
            id: e.target.value })}/>
            <a href={`${API}/${todo.id}`}
                className="btn btn-primary me-2">
                Get Todo by ID
            </a>

        <h4>3. Filtering Array Items with completed list</h4>
          <a href={`${API}?completed=true`}
            className="btn btn-primary me-2" >
            Get Completed Todos
          </a>

        <h4>4. Creating new Items in an Array</h4>
          <a href={`${API}/create`}
            className="btn btn-primary me-2">
            Create Todo
          </a>
    
          <h4>5. Delete with Arrays</h4>
            <input
              value={todo.id}
              onChange={(e) => setTodo({
                ...todo, id: e.target.value })}
              className="form-control mb-2"
              type="number"
            />
            <h4>Deleting from an Array</h4>
            <a href={`${API}/${todo.id}/delete`}
              className="btn btn-primary me-2">
              Delete Todo with ID = {todo.id}
            </a>

            <h4>6. Updating with Arrays</h4>
              <input
                value={todo.id}
                onChange={(e) => setTodo({
                  ...todo, id: e.target.value })}
                className="form-control mb-2"
                type="number"
              />
              <input
                value={todo.title}
                onChange={(e) => setTodo({
                  ...todo, title: e.target.value })}
                className="form-control mb-2"
                type="text"
              />
              <h4>Updating an Item in an Array</h4>
              <a
                href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary me-2" >
                Update Title to {todo.title}
              </a>

      <h4>Extra credit</h4>
      <h4> Working with array id</h4>
      <input
                value={todo.id}
                onChange={(e) => setTodo({
                  ...todo, id: e.target.value })}
                className="form-control mb-2"
                type="number"
              />
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Description
      </a>
      <input
        onChange={(e) => setTodo({ ...todo,
            description: e.target.value })}
        value={todo.description}
        className="form-control mb-2 w-75"
        type="text" />

      <div className="d-flex align-items-center">

        <input
          id="statusCheckbox"
          onChange={(e) => {setTodo({ ...todo, completed: e.target.checked }) 
          
          console.log(todo.completed)}}
          checked={todo.completed}
          type="checkbox"
          className="form-check-input me-2"
        />
        <label htmlFor="statusCheckbox" className="mb-0">
          Mark as Completed
        </label>
          <a
          href={`${API}/${todo.id}/completed/${todo.completed}`}
          className="btn btn-primary me-2 float-end"
          >
          Update Status
          </a>
      </div>
      </div>
    );
  }
  export default WorkingWithArrays;