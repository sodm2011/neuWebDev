import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

function ToDoComponent() {
  return (
    <div>
      <h4 className="mt-3">To Do</h4>
      <hr/>
      <div className="row">
        <div className="col-12 todo-item">
          <a href="#" className="hyperLink">
            <FontAwesomeIcon icon={faCircle} className="me-2" />
            Grade A1 -Env + HTML
          </a>
          <span className="info-text">Full Score: 100 | Due: Monday</span>
          <button className="close-btn">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="col-12 todo-item">
          <a href="#" className="hyperLink">
            <FontAwesomeIcon icon={faCircle} className="me-2" />
            Grade A2 -CSS + BOOTSTRAP
          </a>
          <span className="info-text">Full Score: 80 | Due: Friday</span>
          <button className="close-btn">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
      <br/>
    </div>
  );
}

export default ToDoComponent;
