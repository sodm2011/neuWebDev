import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faDownload, faCog, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import "./index.css"

function GradeTopTool() {
    return (
        <div style={{ padding: '10px' }}>
            <div className='text-end mb-1'>
                <button className='btn btn-light'><FontAwesomeIcon icon={faPlus} /> Import</button>
                <button className='btn btn-light'><FontAwesomeIcon icon={faDownload} /> Export</button>
                <button className='btn btn-light'><FontAwesomeIcon icon={faCog} /> </button>
            </div>

            <table style={{ width: '100%' }}>
                <tbody>
                    <tr>
                        <td style={{ padding: '10px' }}>
                            <label htmlFor="studentNameSearch" style={{fontWeight: 'bold'}}>Student Names</label><br />
                            <div className="search-container">
                                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                                <input
                                    id="studentNameSearch"
                                    title="Type the name of the student to search for"
                                    placeholder="Search Students"
                                />
                            </div>
                        </td>
                        <td style={{ padding: '10px' }}>
                            <label htmlFor="assignmentNameSearch" style={{fontWeight: 'bold'}}>Student Names</label><br />
                            <div className="search-container">
                                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                                <input
                                    id="assignmentNameSearch"
                                    title="Type the name of the assignment to search for"
                                    placeholder="Search Assignments"
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            
                            <button className='btn btn-light'><FontAwesomeIcon icon={faFilter} /> Apply Filter</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GradeTopTool;
