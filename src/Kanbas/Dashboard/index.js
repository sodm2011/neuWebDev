/* eslint-disable react/prop-types */
import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./index.css"

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) {

    return (
    <div style={{ marginLeft: "30px"}}>
    <h1>Dashboard</h1>
    <hr />
    <div style={{ marginLeft: "30px"}}>
        <h3>Published Courses ({courses.length})</h3>
        <hr />
         
        <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
        <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

        <button className="btn btn-success" onClick={addNewCourse} >Add</button>
        <button className="btn btn-success" onClick={() => updateCourse(course)} >Update</button>



        <div className="list-group">
        {courses.map((course) => (
          <Link key={course}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item">
            {course.name}
            <button className="btn btn-warning"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

            <button className="btn btn-danger"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course);
              }}>
              Delete
            </button>

          </Link>
        ))}
      </div>

{/* 
        <div className="course-container">
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
            

        </div> */}
    </div>

</div>
  );
}
export default Dashboard;