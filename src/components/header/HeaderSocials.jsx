import React from 'react'
import {BsLinkedin, BsGithub, BsTelegram, BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/sardorbek-odiljonov-199b08228" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Chaqmoqjon" target='_blank'><BsGithub/></a>
        <a href="https://telegram.me/chaqmoqjon" target='_blank'><BsTelegram/></a>
        <a href="https://www.instagram.com/sardorbek_0diljonov" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials