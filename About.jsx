import React from 'react'
import './About.css'
import yash from '../../assets/yash.png';
import {SiCodeigniter} from 'react-icons/si'
import {MdCastForEducation}from 'react-icons/md'
import {SiCodeproject} from 'react-icons/si'
const About = () => {
  return (

    <section id='about'>
    <h5>Get To Know</h5>
    <h2> About Me</h2>
          <div className='container about__container'>
            <div className='about__me'>
              <div className='about__me-Image'>
                 <img src={yash} alt="about image"/>
              </div>
            </div>

               {/**for cards */}  
               
               <div className='about__content'>
                 <div className='about__cards '>
                 
                  <article className='about__card'> <SiCodeigniter className='about__icon'/> <h5> Experience</h5> <small> Fresher </small></article>
                  <article className='about__card '> <MdCastForEducation className='about__icon'/> <h5> Education</h5> <small> BTech </small></article>
                  <article className='about__card'> <SiCodeproject className='about__icon'/> <h5> Projects</h5> <small>10+</small> </article>
                 </div>
                 <p> As a Computer Science student, I have a strong foundation in Java, HTML, CSS, and JavaScript, and I'm experienced in working with React Native to build powerful mobile applications. I have experience in software development, problem-solving, and project management. I'm a quick learner and passionate about technology and innovation. I'm seeking opportunities to apply my skills and knowledge in a dynamic environment. Please feel free to connect with me to learn more about my potential contributions to your team. </p>
                <a href='#contact' className='btn btn-primary' > Let's Talk</a>
               </div>       
            </div>
 
    </section>

    );
}

export default About
