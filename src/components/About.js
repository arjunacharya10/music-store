import React from 'react';
import './About.css';
import music from './music2.jpg';

const About=()=>{
    return(
        <div >
            <div>
            
            

                <div className="w3-sand w3-grayscale w3-large">

                


                <div style={{padding:'50px'}} className="w3-container" id="about">
                    <div className="w3-content" style={{maxWidth:'700px'}}>
                        <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">ABOUT THE MUSIC STORE</span></h5>
                        <p>The music store was founded with the main intention to make all songs a user may need to me bade availabe to him, in one location. The key take away is that the website poses as an easy to use , fast and responsive site which meets all the requirements of the user. Happy Listening!</p>
                        <p>In addition to the above features, one can also follow their friends and can listen to the songs, which the people they follow post as their story, without even purchasing it!</p>
                        <div className="w3-panel w3-leftbar w3-light-grey">
                        <p><i>“Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.” </i></p>
                        <p>Plato</p>
                        </div>
                        <img src={music} alt="not found" style={{width:'100%',maxWidth:'1000px'}} className="w3-margin-top"/>
                        
                    
                </div>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default About;

/*<header className="bgimg w3-display-container w3-grayscale-min" id="home">
                    <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
                        <span className="w3-tag">Open from 6am to 5pm</span>
                    </div>
                    <div className="w3-display-middle w3-center">
                        <span className="w3-text-white" style={{fontSize:'90px'}}>the<br/>Cafe</span>
                    </div>
                    <div className="w3-display-bottomright w3-center w3-padding-large">
                        <span className="w3-text-white">15 Adr street, 5015</span>
                    </div>
                </header> */