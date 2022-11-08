import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Footer() {
    let navigate = useNavigate()
    return(
        <div id="footer-container">
            <h1>Ghufran Ali<br/>Studying Dentistry at Sofia MU<br/>A's in GCSE and A-Level<br/>Techniques used proved by Science</h1>
            <Button className='button' onClick={() => navigate('../contact')}>Contact Me</Button>
        </div>
    )
}

export default Footer