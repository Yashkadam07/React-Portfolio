import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {


  return (
    <section id='contact'>
       <h5> Get In Touch</h5>
       <h2> Contact ME</h2>

       <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
             <HiOutlineMail className='contact_option-icon'/>
             <h4> Email</h4>
             <h5>yashkadam7689@gmail.com</h5>
             <a href='mailto:yashkadam7689@gmail.com' target='_blank'> Send a message</a>
          </article>
          <article className='contact_option'>
             <AiFillInstagram  className='contact_option-icon'/>
             <h4> Instagram</h4>
             <h5>Yash Kadam</h5>
             <a href='https//:yashkadamfitness' target='_blank'> Send a message</a>
          </article>
          <article className='contact_option'>
             <BsWhatsapp className='contact_option-icon'/>
             <h4> WhatsApp</h4>
             <h5>8830989720</h5>
             <a href="https://api.whatsapp.com/send?phone+918830989720" target='_blank'> Send a message</a>
          </article>
        </div>

        {/** now right side  */}

        <form>

             <input type='text' name="name" placeholder='Enter your name'/>  
             <input type='email' name="email" placeholder='Enter your email'/>
            <textarea name="message" rows='7' placeholder='Enter your message' required/>      
            <button type='submit' className='btn btn-primary'>Send Message</button>            
        </form>
       </div>
    </section>
  )
}

export default Contact
