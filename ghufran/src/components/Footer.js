import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Footer() {
    let navigate = useNavigate();
    return(
        <div id="footer-container">
            <div id="content1"></div>
            <div id="content2">
                <h1>Ghufran Ali<br/>Third Year Dental Student<br/>A's in GCSE and A-Level<br/>Techniques used proved by Science</h1>
                <Button className='button' onClick={() => navigate('../contact')}>Contact Me</Button>
            </div>
        </div>
    )
}

export default Footer
