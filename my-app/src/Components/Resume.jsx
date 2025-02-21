import React, {useState} from 'react';
import Header from "./Header";
import '../CSS/website.css';
import '../CSS/resume.css';
import resumeData from '../Files/resume.json';

const Resume = ({}) => {
    const [dropDown, setDropDown] = useState(null);

    const toggleSection = (section) => {
        setDropDown(dropDown === section ? null : section);
    }

    return (
    <div className="container">
        <div className="top">
            <Header />
        </div>
        <div className="resume">

            {/* EDUCATION */}
            <div className="wrapper1" onClick={() => toggleSection('education')}>
                <div className="section-title">
                    <h2> Education </h2>
                </div>
            </div>
            {dropDown === 'education' && (
                resumeData.education.map((edu, index) => (
                    <div className="wrapper2" key={index}>
                        <div className="section1">
                            <p className="degree">{edu.degree}</p>
                            <p className="details">{edu.details}</p>
                        </div>
                        <div className="section2">
                            <p className="right">{edu.date}</p>
                        </div>
                    </div>
                ))
            )}

            {/* EXPERIENCE */}
            <div className="wrapper1" onClick={() => toggleSection('experience')}>
                <div className="section-title">
                    <h2> Experience </h2>
                </div>
            </div>
            {dropDown === 'experience' && (
                resumeData.experience.map((exp, index) => (
                <div className="wrapper2" key={index}>
                    <div className="section1">
                        <p className="degree">{exp.position}</p>
                        <p className="date">{exp.date}</p>
                        <ul>
                            {exp.details.map((detail, index) => (
                                <li className="details" key={index}>{detail}</li>
                            ))}
                        </ul> 
                        <p className="skills">Skills: {exp.skills}</p>
                    </div>
                    <div className="section2">
                        <p className="right">{exp.location}</p>
                    </div>
                </div>
                ))
            )}

            {/* PROJECTS */}
            <div className="wrapper1" onClick={() => toggleSection('projects')}>
                <div className="section-title">
                    <h2> Projects </h2>
                </div>
            </div>
            {dropDown === 'projects' && (
                resumeData.projects.map((proj, index) => (
                    <div className="wrapper2" key={index}>
                        <div className="section1">
                            <p className="degree">{proj.title}</p>
                            <p className="date">{proj.date}</p>
                            <ul>
                                {proj.details.map((detail, index) => (
                                    <li className="details" key={index}>{detail}</li>
                                ))}
                            </ul>
                            <p className="skills">Skills: {proj.skills}</p>
                        </div>
                        <div className="section2">
                            <p className="right">{proj.location}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    </div>
    );
}

export default Resume;