import React from 'react';
import './portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Basics from '../../img/basics.png';
import Labfit from '../../img/imgLab.png';
import soignantde from '../../img/soignantde.png';
import club from '../../img/club.png';
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id='Portfolio'>
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >

        <SwiperSlide>
            <img src={ Basics } />
        </SwiperSlide>

        <SwiperSlide>
            <img src={ Labfit } />
        </SwiperSlide>

        <SwiperSlide>
            <img src={ soignantde } />
        </SwiperSlide>


        <SwiperSlide>
            <img src={ club } />
        </SwiperSlide>


      </Swiper>

    </div>
  )
}

export default Portfolio