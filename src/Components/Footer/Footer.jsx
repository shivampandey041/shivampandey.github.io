import React from 'react';
import './footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import GitHub from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} style={{ width:'100%' }} />
        <div className='f-content'>
            <span>shivampandey07422@gmail.com</span>
            <div className='f-icons'>
                <a href='https://github.com/shivampandey041' target="_blank"><GitHub color='white' size='3rem' /></a>
                <a href='https://www.linkedin.com/in/shivam-thedeveloper' target="_blank"><Linkedin color='white' size='3rem' /></a>
                <a href='https://www.instagram.com/' target="_blank"><Insta color='white' size='3rem' /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer