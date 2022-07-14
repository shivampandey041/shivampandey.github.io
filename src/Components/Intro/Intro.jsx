import React from 'react';
import './intro.css';
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Intro = () => {

  const transition = { duration : 2, type: 'spring' }

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='intro'>
         <div className='i-left'>

            <div className='i-name'>
                <span style={{ color: darkMode ? 'white' : '' }}>Hy! I Am</span>
                <span>Shivam Pandey</span>
                <span>Web Developer with Good Knowladage in web designing and development, producting the Quality work</span>
            </div>
            <Link spy={true} to="Contact" smooth={true}>
            <button className='button i-button'>Hire me</button>
            </Link>
            <div className='i-icons'>
            <a href='https://github.com/shivampandey041' target="_blank"><img src={ GitHub } /></a>
            <a href='https://www.linkedin.com/in/shivam-thedeveloper' target="_blank"><img src={ LinkedIn } /></a>
            <a href='https://www.instagram.com/' target="_blank"><img src={ Instagram } /></a>
            </div>

         </div>
         <div className='i-right'>
            <img src={ Vector1 } />
            <img src={ Vector2 } />
            <img src={ boy } />
            <motion.img 
            initial={{left: '-36%'}}
            whileInView={{left: '-24%'}}
            transition={transition}
            src={ glassesimoji } />

            <motion.div 
            initial={{ top:'-4%', left: '74%' }}
            whileInView={{ left:'68%' }}
            transition={transition}
            style={{ top:'-4%', left:'68%' }}
            className='floating-div'
            >
              <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
            </motion.div>
            <motion.div 
            initial={{ top:'18rem', left: '9rem' }}
            whileInView={{ left:'0rem' }}
            transition={transition}
            style={{ top:'18rem', left:'0rem' }}
            className='floating-div'
            >
              <FloatingDiv image={thumbup} txt1='Best Web' txt2='Design' />
            </motion.div>

            {/* blur divs */}
            <div className='blur' style={{ background:'rgb(236 210 255)' }}></div>
            <div className='blur' style={{ background:'#C1F5FF', top:'17rem', width:'21rem', height:'11rem', left:'-9rem' }}></div>

         </div>
    </div> 
  )
}

export default Intro