import React from "react";
import ModuleList from "./ModuleList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisV, faCircleCheck } from "@fortawesome/free-solid-svg-icons";


function Modules() {
  return (
    <div>
      <div className="d-flex justify-content-end" style={{marginRight: "10px"}}>
        <button className="btn btn-light btn-sm">Collapse All</button>
        <button className="btn btn-light btn-sm">View Progress</button>

      <div className="dropdown">
          <button className="btn btn-light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FontAwesomeIcon icon={faCircleCheck}  style={{ color: "green", paddingRight: "10px" }}/>
              Publish All
          </button>
          <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
      </div>

      <button className="btn btn-danger btn-sm">
        <FontAwesomeIcon icon={faPlus} /> Module
      </button>
      <button className="btn btn-light btn-sm">
        <FontAwesomeIcon icon={faEllipsisV} />
      </button>
    </div>
    <hr />
    <ModuleList />
  </div>
  );
}
export default Modules;