import React, {useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./moduleList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisV, faCircleCheck } from "@fortawesome/free-solid-svg-icons";


function ModuleList() {
  const { courseId } = useParams();
  const [modules, setModules] = useParams(db.modules);
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });

  // const modules = useSelector((state) => state.modulesReducer.modules);
  // const module = useSelector((state) => state.modulesReducer.module);
  // const dispatch = useDispatch();


  return (

    <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
          <input value={module.name}
          onChange={(e) => setModule({
            ...module, name: e.target.value })}
        />
        <textarea value={module.description}
          onChange={(e) => setModule({
            ...module, description: e.target.value })}
        />
        {/* <input value={module.name}
          onChange={(e) => dispatch(setModule({
            ...module, name: e.target.value }))}
        />
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({
            ...module, description: e.target.value }))}
        /> */}
        </div>
        {/* <button className="btn btn-warning" onClick={dispatch(updateModule(module))}>Update</button>

        <button className="btn btn-success" onClick={() => {dispatch(addModule({...module, course: courseId}))}}>Add</button> */}

      </li>
      <h5>module</h5>

      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
              <div className="list-group-item-moduleName">
                <h3>{module.name}</h3>
                <div>
                {/* <button className="btn btn-success btn-sm" onClick={() => dispatch(setModule(module)) }>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteModule(module._id)) }> Delete </button> */}

                  {/* <button className="btn btn-success btn-sm" onClick={() => dispatch(setModule(module)) }>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteModule(module._id)) }> Delete </button> */}

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