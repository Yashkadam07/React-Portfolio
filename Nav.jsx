import React from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlinePerson4} from 'react-icons/md'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {MdContacts} from 'react-icons/md'
import { useState } from 'react';


const Nav = () => {
  const[activeNav,setActiveNav]=useState('#');

  return (
    <nav>
      <a href='#'  onClick={ ()=>setActiveNav('#') } className={activeNav ==='#' ? 'active': ''}> <AiOutlineHome/></a>
      <a href='#about' onClick={ ()=> setActiveNav('#about') } className={activeNav ==='#about' ? 'active':''}> <MdOutlinePerson4/></a>
      <a href='#experience'  onClick={ ()=> setActiveNav('#experience') } className={activeNav ==='#experience' ? 'active' : ''}> <BsJournalBookmarkFill/></a>
      <a href='#services' onClick={()=> setActiveNav('#services')} className={ activeNav==='#services'? 'active':''} > <RiServiceLine/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav ==='#contact'? 'active ' : ''}> <MdContacts/></a>
    </nav>
  )
}

export default Nav
