import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import '../CSS/website.css';
import '../CSS/home.css';
import backgroundImage from '../Images/home_page_background.png';

const Home = () => {
    return (
        <div className="container" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>
        <div className="top">
            <Header />
        </div>
        </div>
    );
}

export default Home;