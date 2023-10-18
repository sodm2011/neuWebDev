import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const [assignmentName, setAssignmentName] = useState(assignment.title);


  return (
    <div className="container">
        <div className="text-end text-success">
            <FontAwesomeIcon icon={faCheckCircle} style={{marginRight: 5}}/>
            Published
            <button className="btn btn-light btn-sm">
                <FontAwesomeIcon icon={faEllipsisV} />
            </button>
        </div>
        <hr />
        <div className="row mb-3">
                <label htmlFor="assignmentName" className="col-sm-12 col-form-label">Assignment Name</label>
                <div className="col-sm-12">
                    <input
                        type="text"
                        className="form-control"
                        id="assignmentName"
                        value={assignmentName}
                        onChange={(e) => setAssignmentName(e.target.value)}
                        placeholder="Assignment Name"
                    />
                </div>
            </div>
 
        <hr/>

        <div className="text-end">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light">
            Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-danger me-2">
                Save
            </button>
        </div>
        <hr/>
    </div>
  );
}


export default AssignmentEditor;