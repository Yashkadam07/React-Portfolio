import React from 'react'
import './experience.css'
import { MdVerified } from 'react-icons/md'
const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I Have ? </h5>
      <h2> My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>

          <h3> Frontend Developement </h3>
          
          <div className='experience__content'>
            <article className='experience__details'>

            <MdVerified  className='experience_icons'/>


              <div>
                <h4> HTML </h4> <small className='text-light'> Intermediate</small>
              </div>

            </article>

            <article className='experience__details'>
              <MdVerified  className='experience_icons'/>
              <div>
                <h4> CSS</h4> <small className='text-light'> Intermediate</small>
              </div>

            </article>

            <article className='experience__details'>
              <MdVerified className='experience_icons' />
              <div>
                <h4> JavaScript </h4> <small className='text-light'> Intermediate</small>

              </div>
            </article>

            <article className='experience__details'>
              <MdVerified  className='experience_icons'/>
              <div>
                <h4> React </h4> <small className='text-light'> Beginner </small>

              </div>
            </article>

            <article className='experience__details'>
              <MdVerified  className='experience_icons'/>
              <div>
                <h4> Bootstrap </h4> <small className='text-light'> Basic</small>

              </div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>

          <h3> Backend Developement </h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <MdVerified className='experience_icons' />
              <div>
              <h4> JAVA </h4> <small className='text-light'> Intermediate</small>

              </div>
            </article>

            <article className='experience__details'>
              <MdVerified  className='experience_icons'/>
<div>
<h4> JavaScript</h4> <small className='text-light'> Intermediate</small>

</div>
            </article>

            

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
