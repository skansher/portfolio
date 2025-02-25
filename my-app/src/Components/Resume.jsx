import React, {useState} from 'react';
import Header from "./Header";
import '../CSS/website.css';
import '../CSS/resume.css';
import resumeData from '../Files/resume.json';
import background from '../Images/page_background1.png';

const Resume = () => {
    const [dropDown, setDropDown] = useState(null);

    const toggleSection = (section) => {
        setDropDown(dropDown === section ? null : section);
    }

    const handleDownload = () => {
        // Define the file URL you want to download
        const fileUrl = '/Muskan_Shergill_Resume.pdf'; // replace with your file path
        const fileName = 'Muskan_Shergill_Resume.pdf'; // specify the name for the downloaded file
    
        // Create an anchor element
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
    
        // Append the link to the document body
        document.body.appendChild(link);
    
        // Trigger the click event to start the download
        link.click();
    
        // Remove the link after the download is triggered
        document.body.removeChild(link);
    };
    

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
            <div className="download-div" onClick={handleDownload}>
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
                        <ul>
                            {exp.details.map((detail, index) => (
                                <li className="details" key={index}>{detail}</li>
                            ))}
                        </ul> 
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
                        <ul>
                                {proj.details.map((detail, index) => (
                                    <li className="details" key={index}>{detail}</li>
                                ))}
                            </ul>
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

            {/* SKILLS */}
            <div className="wrapper1">
                <div className="section-title" onClick={() => toggleSection('skills')}>
                    <div className={`section-image skillsImg ${dropDown === 'skills' ? 'visible' : ''}`}></div>
                </div>
            </div>
            {resumeData.skills.map((sk, index) => (
                <div className={`wrapper2 ${dropDown === 'skills' ? 'visible' : ''}`} key={index}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div className="section1">
                            <p className="degree">{sk.title}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '10px' }}>
                        <p className="skills" style={{fontWeight: '400', fontSize: '1em'}}>{sk.details}</p>
                    </div>
                </div>
            ))}

        </div>

    </div>

    );
}

export default Resume;