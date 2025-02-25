import React, {useState} from 'react';
import Header from "./Header";
import '../CSS/website.css';
import '../CSS/resume.css';
import resumeData from '../Files/resume.json';
import background from '../Images/page_background1.png';

const Resume = ({}) => {
    const [dropDown, setDropDown] = useState(null);

    const toggleSection = (section) => {
        setDropDown(dropDown === section ? null : section);
    }

    return (
    <div className="container" style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>
        <div className="top">
            <Header />
        </div>
        <div className="resume">

            {/* DOWNLOAD RESUME */}
            <div className="download-div">
                <div className="download-image"></div>
            </div>

            {/* EDUCATION */}
            <div className="wrapper1">
                <div className="section-title" onClick={() => toggleSection('education')}>
                <div className={`section-image education ${dropDown === 'education' ? 'visible' : ''}`}></div>
                </div>
            </div>
            {resumeData.education.map((edu, index) => (
                 <div className={`wrapper2 ${dropDown === 'education' ? 'visible' : ''}`} key={index}>
                 <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                     <div className="section1">
                        <p className="degree">{edu.degree}</p>
                     </div>
                     <div className="section2">
                         <p className="right">{edu.date}</p>
                     </div>
                 </div>
                 <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '10px' }}>
                        <p className="summary">{edu.details}</p>
                 </div>
             </div>
            ))}


            {/* EXPERIENCE */}
            <div className="wrapper1">
                <div className="section-title" onClick={() => toggleSection('experience')}>
                    <div className={`section-image experience ${dropDown === 'experience' ? 'visible' : ''}`}></div>
                </div>
            </div>
            {resumeData.experience.map((exp, index) => (
                    <div className={`wrapper2 ${dropDown === 'experience' ? 'visible' : ''}`} key={index}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div className="section1">
                            <p className="degree">{exp.position}</p>
                        </div>
                        <div className="section2">
                            <p className="right">{exp.location}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '10px' }}>
                        <p className="date">{exp.date}</p>
                        <p className="summary">{exp.summary}</p>
                        <p className="skills">Skills: {exp.skills}</p>
                    </div>
                </div>
                ))}

            {/* PROJECTS */}
            <div className="wrapper1">
                <div className="section-title" onClick={() => toggleSection('projects')}>
                    <div className={`section-image projects ${dropDown === 'projects' ? 'visible' : ''}`}></div>
                </div>
            </div>
            {resumeData.projects.map((proj, index) => (
                    <div className={`wrapper2 ${dropDown === 'projects' ? 'visible' : ''}`} key={index}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div className="section1">
                            <p className="degree">{proj.title}</p>
                        </div>
                        <div className="section2">
                            <p className="right">{proj.location}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '10px' }}>
                        <p className="date">{proj.date}</p>
                        <p className="summary">{proj.summary}</p>
                        <p className="skills">Skills: {proj.skills}</p>
                    </div>
                </div>
                ))}

            {/* PUBLICATIONS */}
            <div className="wrapper1">
                <div className="section-title" onClick={() => toggleSection('publications')}>
                    <div className={`section-image publications ${dropDown === 'publications' ? 'visible' : ''}`}></div>
                </div>
            </div>
            {resumeData.publications.map((pub, index) => (
                <div className={`wrapper2 ${dropDown === 'publications' ? 'visible' : ''}`} key={index}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div className="section1">
                            <p className="degree">{pub.title}</p>
                    </div>
                    <div className="section2">
                        <p className="right">{pub.location}</p>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '10px' }}>
                    <p className="citation">{pub.citation}</p>
                </div>
            </div>
                ))}
        </div>
    </div>
    );
}

export default Resume;