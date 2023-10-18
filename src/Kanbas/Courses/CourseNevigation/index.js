import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="AccountNavigatorSideBar">
    {links.map((link, index) => (
        <div key={index}>
            <Link
                to={`/Kanbas/Courses/${courseId}/${link}`}
                className={`AccountNavigatorSideBar-link ${pathname.includes(link) && "active"}`}
            >
                {link}
            </Link>
        </div>
    ))}
</div>
  );
}


export default CourseNavigation;