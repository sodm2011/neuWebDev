import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./moduleList.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisV, faCircleCheck } from "@fortawesome/free-solid-svg-icons";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (

    <ul className="list-group">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
              <div className="list-group-item-moduleName">
                <h3>{module.name}</h3>
                <div>
                  <FontAwesomeIcon icon={faCircleCheck}  style={{ color: "green", paddingRight: "10px" }}/>
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: "10px" }}/>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </div>
              </div>
              <p>{module.description}</p>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;