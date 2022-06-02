import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiLinkedinFill} from 'react-icons/ri'
import {BsTelegram} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ygqrc7n', 'template_fj5h1ku', form.current, 'VSKHRoQZEZn0L7neG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      
  };
  

  const {t} = useTranslation()
  

  return (
    <section id='contact'>
      <h5>{t('boglanish')}</h5>
        <h2>{t('kontakt')}</h2>
      <div className="container contact__container">
        
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='con__icon'/>
            <h2>Email</h2>
            <h4>Chaqmoqjon@gmail.com</h4>
            <a href="https://chaqmoqjon@gmail.com" target='_blank'>{t('habar')}</a>
          </article>

          <article className="contact__option">
            <RiLinkedinFill className='con__icon'/>
            <h2>Linkedin</h2>
            <h4>Sardorbek Odiljonov</h4>
            <a href="https://linkedin.com/in/sardorbek-odiljonov-199b08228" target='_blank'>{t('habar')}</a>
          </article>

          <article className="contact__option"> 
            <BsTelegram className='con__icon'/>
            <h2>Telegram</h2>
            <h4>@Chaqmoqjon</h4>
            <a href="https://telegram.me/chaqmoqjon" target='_blank'>{t('habar')}</a>
          </article>
        </div>
        {/* ====== End ====== */}
        <form action='' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={t('toliq')} required/>
          <input type="email" name='email' placeholder={t('email')} required/>
          <textarea name="massege" rows="7" placeholder={t('habar1')} required></textarea>
          <button type='submit' className='btn btn-primary'>{t('habar2')}</button>
          <h2></h2>
          
        </form>
      </div>
    </section>
  )
}

export default Contact