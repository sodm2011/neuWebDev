import React from "react";
import db from "../../Kanbas/Database";
import "./index.css";
import { useParams, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import CourseNavigation from "./CourseNevigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  
  const location = useLocation();
  const segments = location.pathname.split('/');
  const lastName = segments[segments.length -1];

  return (
    <div style={{marginLeft: 30}}>
        <div className="course-header">
            <FontAwesomeIcon icon={faBars} className="course-icon" />
            <h1 className="course-title">{course.name}</h1>
            <h1 className="course-title" style={{color: "black"}}>{" > " + lastName}</h1>

        </div>
        <hr/>

        <CourseNavigation />
        <div>
            <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{
                left: "320px",
                top: "50px",
                marginTop: "10px",
            }}
            >
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home/>} />
                <Route path="Modules" element={<Modules/>} />
                <Route path="Assignments" element={<Assignments/>} />
                <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor/>}
                />
                <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
            </div>
        </div>

    </div>


  );
}
export default Courses;