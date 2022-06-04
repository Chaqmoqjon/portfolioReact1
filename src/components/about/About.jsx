import React from 'react'
import './About.css'
import MeImage from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { useTranslation } from 'react-i18next'
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

gsap.to('about1',{
  scrollTrigger: {
      trigger: '.about',
      start: '90% center',
      end: 'center 30%',
      
      // markers: true,
      toggleClass: 'about2'
  }
})

const About = () => {
  const {t} = useTranslation()
  return (
    <section className='about1' id='about'>
      <h5>{t('men_haq1')}</h5>
      <h2>{t('men_haq2')}</h2>
      <div className="container about__container">
        <div className="about__me">
          <img className='about__me-image' src={MeImage} alt="me image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h2>{t('kitob')}</h2>
              <p>{t('kitob_text')}</p>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h2>{t('islom_moliya')}</h2>
              <p>{t('islom_moliya_text')}</p>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h2>{t('metaVarse')}</h2>
              <p>{t('metaVarse_text')}</p>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h2>{t('maqsad')}</h2>
              <p>{t('maqsad_text')}</p>
            </article>
          </div>
          <a href="#contact" className='btnTalk btn btn-primary'>{t('aloqa')}</a>
        </div>
      </div>
    </section>
  )
}

export default About