/* eslint-disable react/prop-types */
import React, {useState, useEffect} from "react";
import axios from "axios";
import "./index.css";
import { useParams, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import CourseNavigation from "./CourseNevigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
  const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const URL = "http://localhost:4000/api/courses";
    const findCourseById = async (courseId) => {
        const response = await axios.get(`${URL}/${courseId}`);
        setCourse(response.data);
        console.log("get course", course);
    };
  
  const location = useLocation();
  const segments = location.pathname.split('/');
  const lastName = segments[segments.length -1];

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

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
                <div className="course-details">
                <h2 className="course-title">{course.name}</h2>
                <div className="course-meta">
                    <span className="course-number">Course Number: {course.number}</span>
                    <span className="course-department">Department: {course.department}</span>
                    <span className="course-credits">{course.credits} Credits</span>
                    <span className="course-dates">
                    {course.startDate} - {course.endDate}
                    </span>
                </div>
                <div className="course-description">
                    <h3>Description</h3>
                    <p>{course.description}</p>
                </div>
                </div>
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home/>} />
                <Route path="Modules" element={<Modules/>} />
                <Route path="Assignments" element={<Assignments/>} />
                <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor/>}
                />
                <Route path="Grades" element={<Grades/>} />
            </Routes>
            </div>
        </div>

    </div>


  );
}
export default Courses;