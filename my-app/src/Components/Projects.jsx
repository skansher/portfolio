import React, {useState} from 'react';
import Header from "./Header";
import '../CSS/website.css';
import '../CSS/resume.css';
import resumeData from '../Files/resume.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Projects = ({}) => {
    return (
        <div className="container">
            <div className="top">
                <Header />
            </div>
            <div className="resume">

                {/* DOWNLOAD RESUME */}
                    <div className="download-div">
                        <FontAwesomeIcon icon={faDownload} className="download-icon"/>
                        <h3>Download Resume</h3>
                    </div>

                
            </div>
        </div>
    );
}

export default Projects;