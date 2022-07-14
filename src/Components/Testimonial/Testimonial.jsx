import React from 'react';
import './testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import user from '../../img/user.jpg';
import poshikaMam from '../../img/poshikaMam.jpeg';
import Jitendra from '../../img/jitendraSir.jpeg';
import Aman from '../../img/aman.jpeg';
import SameerSir from '../../img/sameerSir.jpeg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonial = () => {

    const clients = [
        {
            img: SameerSir,
            name: "Sameer Hussain Pathan",
            role: "Senior PHP Developer",
            review:
            "Shivam is very hardworking and dedicated person and i am always inspired. Work with him is always good experience"
        },
        {
            img: user,
            name: "Divyesh Rathore",
            role: "Team Leader & Senior PHP Developer",
            review:
            "Shivam is very hardworking and dedicated towards his work & his skills also good.He is very punctual & sincere.At one point of time he has handled many projects because lack of team members & completed project  & delivered on time.This is a very good thing."
        },
        {
            img: Jitendra,
            name: "Jitendra Patidar",
            role: "Senior JavaScript Developer",
            review:
            "Shivam is young and proficient software developer, he work on frontend and backend of web application with efficiency and accuracy.He is a team player, Work with him is always good experience."
        },
        {
            img: poshikaMam,
            name: "Poshika Gupta",
            role: "React Native Developer",
            review:
            "Shivam is very hardworking and dedicated towards his work & his skills also good.He is very punctual & sincere.At one point of time he has handled many projects because lack of team members & completed project  & delivered on time.This is a very good thing."
        },
        {
            img: Aman,
            name: "Aman Panday",
            role: "Backend Developer",
            review:
            "I am Always inspired his work and dedication."
        }
    ]


  return (
    <div className='t-wrapper' id='Testimonial'>
        <div className='t-heading'>
            <span>My Team always get </span> 
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className='blur t-blur1' style={{ background:'var(--purple)' }}></div>
            <div className='blur t-blur2' style={{ background:'skyblue' }}></div>
        </div>
        {/* slider */}
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
        
        >
            {clients.map((client, index) =>{
                return(
                    <SwiperSlide key={index}>
                        <div className='testimonial'>
                        <img src={client.img} />
                        <span style={{ fontWeight:'bold', color:'orange' }}>{client.name}</span>
                        <span style={{ color:'black', fontSize:'13px', marginBottom:'0.5rem' }}>({client.role})</span>
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>

    </div>
  )
}

export default Testimonial