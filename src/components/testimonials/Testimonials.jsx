import React from "react";
import "./Testimonials.css";
import { data2 } from "../servers/static";
import {BsLinkedin, BsGithub, BsTelegram} from 'react-icons/bs'
import { useTranslation } from "react-i18next";

// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  const {t} = useTranslation()
  return (
    <section id="testimonials">
      <h5>{t('jamoa')}</h5>
      <h2>{t('fikr')}</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      
      >

        {
          data2?.map(({id, image, title, name, lavozim, linkedin, github, telegram})=>
          <SwiperSlide key={id} className="testimonial">
          <div className="client__avatar">
            <img src={image} alt="" />
          </div>
          <h2 className="client__name">{name}</h2>
          <p>{lavozim}</p>
          <small className="client__review">{title}
          </small>
          <div className="test__icon">
          <a href={linkedin} target='_blank'><BsLinkedin/></a>
        <a href={github} target='_blank'><BsGithub/></a>
        <a href={telegram} target='_blank'><BsTelegram/></a>
          </div>
        </SwiperSlide>
          )
        }
        

        
      </Swiper>
    </section>
  );
};

export default Testimonials;
