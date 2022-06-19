import React from 'react'
import Resume from '../../assets/SARDORBEK.pdf'
import Psychometric from '../../assets/Sardorbek.har.pdf'
import { useTranslation } from "react-i18next";


const CTA = () => {
  const {t} = useTranslation()
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>{t('resume')}</a>
        <a href={Psychometric} className='btn btn-primary'>{t('aloqa')}</a>
    </div>
  )
}

export default CTA