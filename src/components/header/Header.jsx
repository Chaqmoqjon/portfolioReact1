import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../assets/me(3).jpg'
import HeaderSocials from './HeaderSocials'
import { useTranslation } from "react-i18next";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const imgRef = useRef(null)
  
  // useEffect(()=>{
  //   const el = imgRef.current
  //   gsap.fromTo(el, {rotation: 0}, {rotation: 180, duration: 3, scrollTrigger:{
  //     trigger: el
  //   }})
  // },[])

  const {t} = useTranslation()
  return (
    <header>
      <div className="container header__container">
        <h5>{t('salom')}</h5>
        <h1>{t('ism')}</h1>
        <h5 className="text-light">{t('kasb')}</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img className='meImg' ref={imgRef}  src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>{t('skroll')}</a>
      </div>

     
    </header>
  )
}

export default Header