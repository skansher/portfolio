import React from 'react';
import '../CSS/popup.css';

const PopUp = ({proj, onClose}) => {
    const handleDownload = () => {
        // Define the file URL you want to download
        const fileUrl = proj.download; // replace with your file path
        const fileName = fileUrl.split('/').pop(); // specify the name for the downloaded file
    
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

    return(
        <div className="background">
            <div className="popup-card">
                <div className="proj-popup-title">
                    <h2 className="popup-title">{proj.title}</h2>
                    <button onClick={() => onClose()} className="close-icon">X
                    </button>
                </div>
                <div className="subheader">
                <div className="pop-details">
                        <p className="details"><strong>Association: </strong>{proj.association}</p>
                        <p className="details"><strong>Position: </strong>{proj.position}</p>
                        <p className="details"><strong>Date: </strong>{proj.date}</p>
                        <p className="details">
                            <strong>Github: </strong>
                            {proj.github && proj.github.startsWith("https://") ? (
                                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                                {proj.github}
                                </a>
                            ) : (
                                <span>{proj.github}</span>  
                            )}
                            </p>
                        <p className="details">
                            <strong>Demo: </strong>
                            {proj.video && proj.github.startsWith("https://") ? (
                                <a href={proj.video} target="_blank" rel="noopener noreferrer">
                                {proj.video}
                                </a>
                            ) : (
                                <span>{proj.video}</span>
                            )}
                            </p>
                        <p className="details"><strong>Purpose: </strong>{proj.purpose}</p>
                    </div>
                </div>
                <div className="row">
                <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
                    <img className="popup-media" src={proj.media} alt={proj.alt}></img>
                    {proj.download ? (
                        <button className="download-proj" onClick={handleDownload}>Download Project Materials</button>
                    ) : (
                        <span></span>
                    )}
                </div>
                <div className="popup-info">
                    <div className="pop-resp">
                        <p className="details" style={{margin: "0px"}}><strong>Responsibilities:</strong></p>
                        <ul>
                            {proj.responsibilities.map((resp, index) => (
                                    <li className="details" key={index}>{resp}</li>
                                ))}
                        </ul>
                    </div>
                    <div className="pop-tech">
                        <p className="details"><strong>Technology/Skill: </strong>{proj.technology}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );

}

export default PopUp;