import React, { useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3xu60ff', 'template_vry485p', form.current, 'ymG2SaZTMBrQpPXGI')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            setTimeout(() => {
                window.location.reload();
              }, 2000);
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <div className='contact-form' id='Contact'>
        <div className='w-left'>
            <div className='awesome'>
                <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1' style={{ background:'#ABF1FF94' }}></div>
            </div>
        </div>

        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Enter Your Name' />
                <input type="email" name='user_email' className='user' placeholder='Enter Your Email' />
                <textarea name='message' className='user' placeholder='Enter Messgae..'></textarea>
                <input type='submit' value='Send' className='button' />
                { done &&<div style={{ background:'gray', padding:'10px 10px', borderRadius:'7px', color:'#fff' }}>
                <span> "Thanks for contacting me"</span>
                </div>}
                <div
                    className='blur c-blur1'
                    style={{ background:'var(--purple)' }}
                ></div>
            </form>
        </div>

    </div>
  )
}

export default Contact