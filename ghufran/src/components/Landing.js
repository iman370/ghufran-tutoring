import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Landing() {
    let navigate = useNavigate()
    return(
      <div id="landing-container">
        <div id="navbar">
            <div id="logo">
                <h1>Tutoring By Ghufran</h1>
            </div>
            <div id="buttons">
                <Button className='button' onClick={() => navigate('../contact')}>Contact</Button>
                <Button className='button' onClick={() => navigate('../')}>Home</Button>
            </div>
        </div>
        <div id="content">
            <h1>Better Learning For Your Child<br/>With Science-Backed Education.</h1>
            <div className='divider-small' />
            <Button className='button' onClick={() => navigate('../contact')}>Contact Now</Button>
        </div>
      </div>
    );
}

export default Landing