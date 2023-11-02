import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./moduleList.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisV, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();
  // const modules = db.modules;
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (

    <ul className="list-group">
      <li className="list-group-item">
        <div style={{display: "flex", flexDirection: "column", }}>
          <input 
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }/>
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }/>
          </div>
        <button className="btn btn-success btn-sm"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button className="btn btn-primary btn-sm"
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button>

      </li>


      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
              <div className="list-group-item-moduleName">
                <h3>{module.name}</h3>
                <div>
                  {/* <FontAwesomeIcon icon={faCircleCheck}  style={{ color: "green", paddingRight: "10px" }}/>
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: "10px" }}/>
                  <FontAwesomeIcon icon={faEllipsisV} /> */}
                  <button className="btn btn-success btn-sm"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button className="btn btn-danger btn-sm"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>

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