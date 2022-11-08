import React from 'react';

//images
import maths from './../images/maths.png';
import physics from './../images/physics.png';
import biology from './../images/biology.png';
import chemistry from './../images/chemistry.png';

function Subjects() {
    return(
        <div id='subjects-container'>
            <div id='content'>
                <h1>Tutoring I Provide at GCSE Level</h1>
                <div id='image-tray'>
                    <div className="subject">
                        <img className="image" src={maths} alt="Maths"/>
                        <h1>Maths</h1>
                    </div>
                    <div className="subject">
                        <img className="image" src={physics} alt="Physics"/>
                        <h1>Physics</h1>
                    </div>
                    <div className="subject">
                        <img className="image" src={biology} alt="Biology"/>
                        <h1>Biology</h1>
                    </div>
                    <div className="subject">
                        <img className="image" src={chemistry} alt="Chemistry"/>
                        <h1>Chemistry</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subjects