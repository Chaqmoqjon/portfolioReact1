import React from 'react'
import './Footer.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiLinkedinFill} from 'react-icons/ri'
import {BsTelegram} from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const {t} = useTranslation()
  return (
    <footer>
      <a href="#" className='footer__logo'>SARDORBEK</a>

      <ul className='permalinks'>
        <li><a href="#">{t('uy')}</a></li>
        <li><a href="#about">{t('men_haq2')}</a></li>
        <li><a href="#experince">{t('tajriba2')}</a></li>
        <li><a href="#services">{t('men')}</a></li>
        <li><a href="#portfolio">{t('portfolio')}</a></li>
        {/* <li><a href="#testimonials">{t('fikr')}</a></li> */}
        <li><a href="#contact">{t('kontakt')}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/sardorbek-odiljonov-199b08228" target='_blank'><RiLinkedinFill/></a>
        <a href="https://telegram.me/chaqmoqjon" target='_blank'><BsTelegram/></a>
        <a href="mailto:chaqmoqjon@gmail.com" target='_blank'><MdOutlineEmail/></a> 
      </div>
      <div className="footer__copright">
        <small className='chaqmoqjon'>&copy; {t('oxiri')}</small> 
      </div>
    </footer> 
  )
}

export default Footer