import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href='https://www.linkedin.com/in/yashkadamd' target="_blank"> <AiFillLinkedin/> </a>
      <a href='https://github.com/Yashkadam07/Yash-V-Kadam'  target="_blank"><BsGithub/></a>
      <a href='https://instagram.com/yashkadamfitness?igshid=YmMyMTA2M2Y=' target="_blank"> <AiFillInstagram/></a>
    </div>  
  )
}

export default HeaderSocial; 
