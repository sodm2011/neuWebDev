import React from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"

function Dashboard() {
  const courses = db.courses;
  return (
    <div style={{ marginLeft: "30px"}}>
    <h1>Dashboard</h1>
    <hr />
    <div style={{ marginLeft: "30px"}}>
        <h3>Published Courses ({courses.length})</h3>
        <hr />
        <div className="row">
            {courses.map((course) => (
                <div key={course._id} className="course-card"> 
                    <div className="course-top"></div>
                    <div className="card-body" style={{padding: 10}}>
                        <h5 className="card-title">{course.name}</h5>
                        <p className="card-text">{course.number}</p>
                        <p className="card-text">{course.startDate}</p>
                        <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                            Link
                        </Link>
                    </div>
                </div>
            ))}
            

        </div>
    </div>

</div>
  );
}
export default Dashboard;