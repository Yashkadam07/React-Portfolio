import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import './footer.css'


const Footer = () => {
  return (
   <footer>
     <a href='#' className='footer__logo'> Yash Kadam</a>

     <ul className='links'>
      <li> <a href='#'>Home</a></li>
      <li> <a href='#about'>About</a></li>
      <li> <a href='#experience'>Experience</a></li>
      <li> <a href='#services'>Services</a></li>
      <li> <a href='#portfolio'>Portfolio</a></li>
      <li> <a href='#contact'>Contact</a></li>
    
     </ul>

     <div className='footer__socials'>
       <a href='https://www.facebook.com/yash.kadam.1420/'><AiFillFacebook/> </a>
       <a href='https://instagram.com/yashkadamfitness?igshid=YmMyMTA2M2Y='> <AiFillInstagram/></a>
       <a href='https://www.linkedin.com/in/yashkadamd'><AiFillLinkedin/> </a>
       <a href='https://github.com/Yashkadam07/Yash-V-Kadam'><AiFillTwitterCircle/> </a>
     </div>

     <div className='footer_socials footer_copyright'>
             <small >&copy; Yash Kadam. All righs are reserved.</small>
     </div>
   </footer>
  )
}

export default Footer
