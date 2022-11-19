import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Contact() {
    let navigate = useNavigate()
    return(
        <div id="contact-container">
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
                <div id="content1">
                    <h1>Contact</h1>
                    <p>Tutoring is available Saturday and Sunday, 10am to 4pm.</p>
                </div>
                <div id="content2">
                    <h1>Whatsapp +44 7542 357 429</h1>
                    <p>Students are taught over Google Classroom, although printable versions of worksheets are provided for you to print at home.</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
