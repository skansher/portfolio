import React from 'react';
import { Link }  from 'react-router-dom';
import '../CSS/header.css';

const Header = ({}) => {
    return (
        <div className="header">
            <div className="brand">
                <h3><Link to="/home" className="link">Muskan Shergill</Link></h3>
            </div>
            <div className="header-element">
                <a> <Link to="/resume" className="link">Resume</Link> </a>
            </div>
            <div className="header-element">
                <a> <Link to="/projects" className="link">Projects</Link> </a>
            </div>
            <div className="header-element">
                <a> <Link to="/publications" className="link">Publications</Link> </a>
            </div>
            <div className="header-element">
                <a> <Link to="/contact" className="link">Contact</Link> </a>
            </div>
        </div>
    );
}

export default Header;