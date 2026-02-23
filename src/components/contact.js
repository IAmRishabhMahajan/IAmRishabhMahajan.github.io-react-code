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
    const linkedinLabel = Data.linkedin.split('/').filter(Boolean).slice(-1)[0];

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
        <div className="grid" id='contact'>
            <div className="whole">               
                <div className="body">
                    <div className='contact'>
                        <h1 className='contact title'> Contact </h1>
                        <p className='contact-subtitle'>Let’s connect for roles, collaborations, or just a quick hello.</p>
                        <div className='contact-section grid_row'>
                            <div className='contact-information-container'>
                                <div className='contact-information'>
                                    <div className='contact-information-item'>
                                        <a href={`tel:${Data.phone.replace(/\s/g, '')}`} className='contact-icon-wrapper' aria-label='Phone'>
                                            <AiOutlinePhone className='contact-icon' />
                                        </a>
                                        <div className='more-contact-detail'><a href={`tel:${Data.phone.replace(/\s/g, '')}`}>{Data.phone}</a></div>
                                    </div>
                                    <div className='contact-information-item'>
                                        <a href={`mailto:${Data.email}`} className='contact-icon-wrapper' aria-label='Email'>
                                            <AiOutlineMail className='contact-icon' />
                                        </a>
                                        <div className='more-contact-detail'><a href={`mailto:${Data.email}`} target='_blank' rel="noreferrer">{Data.email}</a></div>
                                    </div>
                                    <div className='contact-information-item'>
                                        <a href={Data.linkedin_link} className='contact-icon-wrapper' target='_blank' rel="noreferrer" aria-label='LinkedIn'>
                                            <AiOutlineLinkedin className='contact-icon' />
                                        </a>
                                        <div className='more-contact-detail'><a href={Data.linkedin_link} target='_blank' rel="noreferrer">{linkedinLabel}</a></div>
                                    </div>
                                </div>
                                <a id='cv_download' href={Data.cv_path} target='_blank' rel="noreferrer"> <AiOutlineDownload /> Download my CV in PDF </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
