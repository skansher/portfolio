import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "../CSS/publications.css";

const Publications = () => {
    return (
        <div className="container">
            <div className="top">
                <Header />
            </div>

            <div className="pub-header">
                <img className="header-img" src="/Images/publications_white.png" alt="Publications"></img>
                <p className="header-p">Here, you'll find my research papers and academic contributions!</p>
            </div>

            <div className="pub-list">
                <div className="pub">
                    <div className="pub-graphic">
                        <img src="/Images/satellite_paper.png" alt="Satellite Paper"></img>
                    </div>
                    <div className="pub-info">
                        <p className="pub-title">Energy Efficient LoRaWAN in LEO Satellites</p>
                        <p className="abstract"><strong>Abstract - </strong>LPWAN services’ inexpensive cost and long- range capabilities make it a promising addition and countless
                            satellite companies have started taking advantage of this
                            technology to connect IoT users across the globe. However, LEO satellites have the unique challenge of using rechargeable batteries and green solar energy to power their components. LPWAN technology is not optimized to maximize battery
                            lifespan of network nodes. By incorporating a MAC protocol
                            that maximizes node the battery lifespan across the network, we can reduce battery waste and usage of scarce Earth
                            resources to develop satellite batteries.
                        </p>
                        <p className="citation">
                            Shergill, Muskan, et al. "Energy Efficient LoRaWAN in LEO Satellites." arXiv, 2024, <a href="https://arxiv.org/abs/2412.20660" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/2412.20660</a>.
                        </p>
                    </div>
                </div>
                <div className="pub">
                <div className="pub-graphic">
                        <img src="/Images/poster.png" alt="Satellite Paper"></img>
                    </div>
                    <div className="pub-info">
                        <p className="pub-title">Self-Advocacy of Student Workers for Higher Wage in Academia</p>
                        <p className="abstract"><strong>Abstract - </strong>
                            Undergraduate students are an integral part of Ask Us services at Ohio State University Libraries. 
                            Students perform a wide-range of jobs including answering high volumes of chat reference questions, co-designing and 
                            teaching workshops with librarians, and providing peer-research coaching appointments for novice undergraduate researchers. 
                            This poster will describe student-driven efforts to seek better compensation as well as the managerial philosophy behind working 
                            with students in partnership to create educationally purposeful student employment.
                        </p>
                        <p className="citation">
                            Shergill, Muskan, et al. "Self-Advocacy for Student Workers for Higher Wage in Academia." Michigan Academic Library Association, 2024 <a href="https://miala.org/2024_ac_poster_session_informa.php" target="_blank" rel="noopener noreferrer">https://miala.org/2024_ac_poster_session_informa.php</a>.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <Footer />
            </div>
        </div>
    );
}

export default Publications;