import React from 'react';
import './services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from '../Services/ShivamPandey.pdf'
const Services = () => {
  return (
    <div className='services' id='Services'>

        {/* Left side */}
        <div className='awesome'>
          <span>My Awesome</span>
          <span>Technologies</span>
          <span>
            I have depth knowladage in "WEb Development" and API creation.
            <br />
            I am curentlly wroking in ReactJs Technology.
          </span>
          <a href={Resume} download>
          <button className='button s-button'>Download CV</button>
          </a>
          <div className='blur s-blurl' style={{ background: '#ABF!FF94' }}></div>
        </div>
        {/* right side */}
        <div className='cards'>
            <div style={{ left: '14rem' }}>
              <Card 
                emoji = {HeartEmoji}
                heading = {'Frontend Technologies'}
                detail = {'ReactJs, Vanila JavaScript, Html5, CSS3'}
              />  
            </div>  

            {/* second card */}

            <div style={{ top:'12rem', left:"-4rem" }}>
              <Card
               emoji={Glasses}
               heading={"Backend Technologies"}
               detail={"PHP(Codeigniter), NodeJs, ExpressJs"}
              />
            </div>

            {/* 3rd Caed */}

            <div style={{ top:'19rem', left:'12rem' }}>
              <Card
                emoji={Humble}
                heading={"DataBase"}
                detail={"MySQl, MongoDB(noSQL)"}
              />  
            </div>
          <div className='blur s-blur' style={{ background: "var(--purple)" }}></div>
        </div>

    </div>
  )
} 

export default Services