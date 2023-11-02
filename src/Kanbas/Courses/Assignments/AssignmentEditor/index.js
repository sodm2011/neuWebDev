import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from "../assignmentReducer";


function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  
  const assignment = useSelector(state => 
    state.assignmentReducer.assignments.find(a => a._id === assignmentId)
  ) || { 
      title: "New Assignment",
      description: "",
      dueDate: "",
      availableFromDate: "",
      availableUntilDate: ""
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = () => {
    if (assignmentId === 'NewAssignment') {
        const newAssignment = {
            title: assignmentName,
            description: description,
            dueDate: dueDate,
            availableFromDate: availableFromDate,
            availableUntilDate: availableUntilDate,
            course: courseId,
            points: 0
        };
        dispatch(addAssignment(newAssignment));
        console.log(newAssignment)
    } else {
        dispatch(updateAssignment({...assignment, title: assignmentName, 
          description: description, dueDate: dueDate, 
          availableFromDate: availableFromDate, 
          availableUntilDate: availableUntilDate,
        points: points}));
        console.log(assignment)
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const [points, setPoints] = useState(assignment.points);
  const [assignmentName, setAssignmentName] = useState(assignment.title);
  const [description, setDescription] = useState(assignment.description);
  const [dueDate, setDueDate] = useState(assignment.dueDate);
  const [availableFromDate, setAvailableFromDate] = useState(assignment.availableFromDate);
  const [availableUntilDate, setAvailableUntilDate] = useState(assignment.availableUntilDate);



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


        
        <div className="row mb-3">
        <label htmlFor="description" className="col-sm-12 col-form-label">Description</label>
        <div className="col-sm-12">
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Assignment Description"
          />
        </div>
      </div>

      <div className="row mb-3">
                <label htmlFor="points" className="col-sm-12 col-form-label">Points</label>
                <div className="col-sm-12">
                    <input
                        type="text"
                        className="form-control"
                        id="points"
                        value={points}
                        onChange={(e) => setPoints(e.target.value)}
                        placeholder="100"
                    />
                </div>
            </div>

      <div className="row mb-3">
        <label htmlFor="dueDate" className="col-sm-12 col-form-label">Due Date</label>
        <div className="col-sm-12">
          <input
            type="date"
            className="form-control"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="availableFromDate" className="col-sm-12 col-form-label">Available From Date</label>
        <div className="col-sm-12">
          <input
            type="date"
            className="form-control"
            id="availableFromDate"
            value={availableFromDate}
            onChange={(e) => setAvailableFromDate(e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="availableUntilDate" className="col-sm-12 col-form-label">Available Until Date</label>
        <div className="col-sm-12">
          <input
            type="date"
            className="form-control"
            id="availableUntilDate"
            value={availableUntilDate}
            onChange={(e) => setAvailableUntilDate(e.target.value)}
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