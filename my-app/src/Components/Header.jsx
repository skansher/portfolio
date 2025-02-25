import React from 'react';
import { Link }  from 'react-router-dom';
import '../CSS/header.css';

const Header = () => {
    return (
        <div className="header">
            <Link to="/home" className="link">
                <div className="brand"></div>
            </Link>
            <div className="header-element">
                <Link to="/resume" className="link">Resume/CV</Link>
            </div>
            <div className="header-element">
                <Link to="/projects" className="link">Projects</Link>
            </div>
            <div className="header-element">
                <Link to="/publications" className="link">Publications</Link>
            </div>
            <div className="header-element">
                <Link to="/contact" className="link">Contact</Link>
            </div>
        </div>
    );
}

export default Header;