import React from 'react';
import KanbasNavigation from './KanbasNavigation';
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from './Courses';
import { useState, useEffect } from "react";
import store from './store';
import { Provider } from "react-redux";
import axios from 'axios';

function Kanbas() {

  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([...courses, response.data]);
    setCourse({ name : ""})
  };

  const deleteCourse = async (course) => {
    const response = await axios.delete(`${URL}/${course._id}`);
    setCourses(courses.filter((c) => c._id !== course._id));
  };

  const updateCourse = async (course) => {
    console.log(course);
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };


  useEffect(() => {
    findAllCourses();
  }, []);

   return (
    <Provider store={store}> 
     <div className="d-flex">
       <div>
         <KanbasNavigation/>
       </div>
       <div>
       <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          } />
          <Route path="Courses/:courseId/*" element={
            <Courses courses={courses} />} />

        </Routes>

       </div>
     </div>
     </Provider>
   );
 }
 export default Kanbas;