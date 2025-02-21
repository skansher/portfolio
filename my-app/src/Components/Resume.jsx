import React from 'react';
import Header from "./Header";
import '../CSS/website.css';
import '../CSS/resume.css';

const Resume = ({}) => {
    return (
        <div className="container">
        <div className="top">
            <Header />
        </div>
        <div className="resume">
            <div className="wrapper">
                <div className="section-title">
                    <h2> Education </h2>
                </div>
            </div>
            <div className="section">
                <p>B.S. Computer Science & Engineering</p>
                <p>Studio Art Minor | Humanitarian Engineering Scholars | 3.4 GPA | Dean's List: SP 22, AU 23, SP 24, AU 24</p>
            </div>
        </div>
        </div>
    );
}

export default Resume;