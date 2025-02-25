import React, {useState} from 'react';
import Header from "./Header";
import '../CSS/website.css';
import '../CSS/project.css';
import PopUp from '../Components/PopUp.jsx';
import projectData from '../Files/projects.json';

const Projects = () => {
    const [isPopUp, setIsPopUp] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const triggerPopUp = (proj) => {
        setSelectedProject(proj);
        setIsPopUp(true);
    }

    const closePopUp = () => {
        setSelectedProject(null);
        setIsPopUp(false);
    }

    return (
        <div className="container">
            <div className="top">
                <Header />
            </div>

            {/* PROJECTS CONTAINER */}
            <div className="projects-list">
                {projectData.map((proj, index) => (
                    <div className="project-card" onClick={() => triggerPopUp(proj)}>
                        <div className="proj-title">
                            <h2 className="title">{proj.title}</h2>
                        </div>
                        <img className="media" src={proj.media} alt={proj.alt}>
                        </img>
                        
                    </div>
                ))}
            </div>
            
            {isPopUp && selectedProject && (
                <PopUp
                    proj={selectedProject}
                    onClose={closePopUp}
                />
            )}
        </div>
    );
}

export default Projects;