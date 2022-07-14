import React from 'react';
import './experience.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Experience = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='experience' id='Experience'>
        <div className='achievement'>
            <div style={{ color: darkMode ? 'black' : '' }} className='circle'>1+</div>
            <span>Years</span>
            <span>Experience </span>
        </div>

        <div className='achievement'>
            <div style={{ color: darkMode ? 'black' : '' }} className='circle'>10+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
    </div>
  )
}

export default Experience