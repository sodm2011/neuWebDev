/* eslint-disable react/jsx-key */
import db from "../../Database";
import { useParams } from "react-router-dom";
import React from "react";
import GradeTopTool from "./GradeTopTool";
import "./mainPage.css"

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <GradeTopTool/>
      <hr/>
      <div className="table-responsive">
        <table className="grades-table">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td style={{color: "red"}}>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody>
        </table>
      </div>
    </div>);
}
export default Grades;