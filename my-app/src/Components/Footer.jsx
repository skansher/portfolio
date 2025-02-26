import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/footer.css';
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer">
            <div className="left">
                <div className="link-row">
                <Link to="/home" className="flink">Home</Link>
                <Link to="/resume" className="flink">Resume/CV</Link>
                <Link to="/projects" className="flink">Projects</Link>
                <Link to="/publications" className="flink">Publications</Link>
                <Link to="/contact" className="flink">Contact</Link>
                </div>
            </div>
            <div className="middle">
            </div>
            <div className="right">
                <p className="fcontact">(440) 502 7065</p>
                <p className="fcontact">muskan.shergill@outlook.com</p>
                <div className="fsocials">
                    <a className="fgit" target="_blank" rel="noopener noreferrer" href="https://github.com/skansher"><FaSquareGithub/></a>
                    <a className="flinkd" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/muskan-shergill-595a331a2"><FaLinkedin /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;