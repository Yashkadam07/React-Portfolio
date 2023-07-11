import React from 'react'
import CTA from './CTA'
import yash from  '../../assets/yash.png';
import HeaderSocial from './HeaderSocial';
import './header.css';



const Header = () => {
  return (
    <header>
  
       <div className='container header__container'>
                <h5> Hi, My Name is</h5>
                <h1> Yash Kadam</h1>
                <h5 className='text-light'> Fullstack Developer </h5>
                <CTA/>
                <HeaderSocial/>
              <div  className='yash'>
                <img src={yash} alt="j" className='yash'/>
              </div> 
              
              <a href='#Contact' className='scroll__down'> Scroll Down</a>
               
       </div>
    </header>
  )
}

export default Header
