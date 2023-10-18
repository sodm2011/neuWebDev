// Status.js
import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport, faHome, faStream, faBell, faChartBar, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ToDoComponent from "./ToDoComponent";

function Status() {
    return (
      <div className="moduleDetails">
        <h4 className="mb-3">Course Status</h4>
  
        <button className="btn btn-light btn-sm d-block mt-2" style={{width : "220px", textAlign: 'left'}}>
          <FontAwesomeIcon icon={faFileImport} className="me-2" />
          Import Existing Content
        </button>
        <button className="btn btn-light btn-sm d-block mt-1" style={{width : "220px", textAlign: 'left'}}>
          <FontAwesomeIcon icon={faFileImport} className="me-2" />
          Import From commons
        </button>
        <button className="btn btn-light btn-sm d-block mt-1" style={{width : "220px", textAlign: 'left'}}>
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Choose Home Page
        </button>
        <button className="btn btn-light btn-sm d-block mt-1" style={{width : "220px", textAlign: 'left'}}>
          <FontAwesomeIcon icon={faStream} className="me-2" />
          View Course Stream
        </button>
        <button className="btn btn-light btn-sm d-block mt-1" style={{width : "220px", textAlign: 'left'}}>
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          New Announcement
        </button>
        <button className="btn btn-light btn-sm d-block mt-1" style={{width : "220px", textAlign: 'left'}}>
          <FontAwesomeIcon icon={faChartBar} className="me-2" />
          New Analytics
        </button>
        <button className="btn btn-light btn-sm d-block mt-1" style={{width : "220px", textAlign: 'left'}}>
          <FontAwesomeIcon icon={faBell} className="me-2" />
          View Course Notifications
        </button>

        <ToDoComponent/>

      </div>
    );
  }

  export default Status;