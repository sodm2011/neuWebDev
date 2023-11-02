import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisV, faBook, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import db from "../../Database";
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment } from "./assignmentReducer";

function Assignments() {
  const { courseId } = useParams();
  // const assignments = db.assignments;
  const assignments = useSelector(state => state.assignmentReducer.assignments);

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);

    const dispatch = useDispatch();


  return (
    <div>
      <div className="d-flex justify-content-between">
        <input type="text" className="form-control form-control-sm w-25 me-2" placeholder="Search for Assignments" aria-label="Search for Assignments" />

        <div className="float-end mx-3">
          <button className="btn btn-light btn-sm me-1">
            <FontAwesomeIcon icon={faPlus} /> Group
          </button>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/NewAssignment`} className="btn btn-light btn-sm me-1">
            <button className="btn btn-danger btn-sm me-1">
              <FontAwesomeIcon icon={faPlus} /> Assignment
            </button>
          </Link>
          <button className="btn btn-light btn-sm">
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
        </div>
      </div>

      <hr />

      <div className="list-group">
        <h5 className="list-group-item d-flex justify-content-between" style={{margin: 0}}>
          ASSIGNMENTS
          <span>
            <text style={{borderRadius: 10, border: "1px solid black", padding: 4}}>40% of Total</text>
            <button className="btn btn-sm">
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <button className="btn btn-sm">
              <FontAwesomeIcon icon={faEllipsisV} />
            </button>
          </span>
        </h5>

        {courseAssignments.map((assignment) => (
          <div key={assignment._id}>
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item list-group-item-action d-flex align-items-center assignment-list">
            <FontAwesomeIcon icon={faBook} className="text-success me-2" style={{ fontSize: "24px" }} />
            <div>
              <span className="fw-bold">{assignment.title}</span><br />
              <div style={{display: "flex"}}>
              <div className="subtext" style={{color: "red", marginRight: 10}}>Multiple Modules </div>
              <div className="subtext"> | Due {assignment.dueDate} | {assignment.points}pts</div>
              </div>
            </div>
            <div className="ms-auto">
              <FontAwesomeIcon icon={faCheckCircle} className="text-success ms-2" style={{ fontSize: "20px", marginRight: 10}} />
              <FontAwesomeIcon icon={faEllipsisV} className="ms-2" style={{ fontSize: "20px" }} />
            </div>
          </Link>
          <button 
            className="btn btn-danger btn-sm" 
            onClick={() => {
                dispatch(deleteAssignment(assignment._id)); 
            }}
        >
            Delete 
        </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignments;
