import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const {t} = useTranslation()
  return (
    <section id='services'>
      <h5>{t('myWorld')}</h5>
      <h2>{t('men')}</h2>
      <div className="container services__container">
        <article className='service'>
            <div className="service__head">
              <h3>{t('afzal')}</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t('afzal1')}</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>{t('afzal2')}</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>{t('afzal3')}</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>{t('afzal4')}</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>{t('afzal5')}</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>{t('afzal6')}</p>
              </li>

            </ul>
        </article>

        {/* =========== End =========== */}

        <article className='service'>
            <div className="service__head">
              <h3>{t('talab')}</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t('talab1')}</p>
              </li>

               
            </ul>
        </article>

        {/* =========== End =========== */}

        <article className='service'>
            <div className="service__head">
              <h3>{t('maqsadlar')}</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t('maqsadlar1')}</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>{t('maqsadlar2')}</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>{t('maqsadlar3')}</p>
              </li>

            </ul>
        </article>

        {/* =========== End =========== */}
      </div>
    </section>
  )
}

export default Services