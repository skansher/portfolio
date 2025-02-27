import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
    return (
        <div className="container">
            <div className="top">
                <Header />
            </div>
            <div style={{height: "70vh"}}></div>
            <div className="bottom">
                <Footer />
            </div>
        </div>
    );
}

export default Contact;