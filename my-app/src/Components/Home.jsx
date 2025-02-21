import React from 'react';
import Header from "./Header";
import '../CSS/website.css';
import '../CSS/home.css';

const Home = ({}) => {
    return (
        <div className="container">
        <div className="top">
            <Header />
        </div>
        <h1>Home</h1>
        <p>Welcome to my website!</p>
        </div>
    );
}

export default Home;