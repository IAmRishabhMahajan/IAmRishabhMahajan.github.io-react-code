import './style/App.css';
import './style/contact.css';
import Form from 'react-bootstrap/Form';
import React, { useRef, useState} from 'react';
import { AiOutlinePhone , AiOutlineMail, AiOutlineLinkedin, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineDownload } from 'react-icons/ai';
import Data from './dataresume.json'
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailure, setIsFailure] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8n5yl8u', 'template_az5jcvp', form.current, 'zfgKxIz3bAX9piMVQ')
        .then((result) => {
            console.log(result.text);
            setIsSuccess(true);
            setIsFailure(false);
            setTimeout(() => {
                setIsSuccess(false);
            }, 3000);
        }, (error) => {
            console.log(error.text);
            setIsSuccess(false);
            setIsFailure(true);
            setTimeout(() => {
                setIsFailure(false);
            }, 3000)
        });
    };
    return (
        <div class="grid" id='contact'>
            <div class="whole">               
                <div class="body">
                    <div class='contact'>
                        <h1 class='contact title'> Contact </h1>
                        <div class='contact-section grid_row'>
                            <div class='contact-information-container'>
                                <div class='contact-information'>
                                    <div class='contact-information-item' id='info-phone'>  
                                        <AiOutlinePhone class='contact-icon' style={{color:'#00595a', 'font-size':'35px','padding-right':'10px'}} /> 
                                        <div class='more-contact-detail'> {Data.phone} </div>
                                    </div>
                                    <div class='contact-information-item' id='info-email'> 
                                        <AiOutlineMail class='contact-icon' style={{color:'#00595a', 'font-size':'35px','padding-right':'10px'}} /> 
                                        <div class='more-contact-detail'>  <a href={Data.email} target='_blank' rel="noreferrer"> {Data.email} </a> </div>
                                    </div>
                                    <div class='contact-information-item' id='info-linkedin'>
                                        <AiOutlineLinkedin class='contact-icon' style={{color:'#00595a', 'font-size':'35px','padding-right':'10px'}} />
                                        <div class='more-contact-detail'>  <a href={Data.linkedin_link} target='_blank' rel="noreferrer"> {Data.linkedin} </a> </div>
                                    </div>
                                </div>
                                <a id='cv_download' href={Data.cv_path}> <AiOutlineDownload style={{'font-size':'25px','padding-right':'5px'}} /> Download my CV in PDF </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
