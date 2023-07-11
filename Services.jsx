import React from 'react'
import { BsCheckLg } from 'react-icons/bs'
import './services.css';

const Services = () => {
  return (
    <section id='services' >
      <h5> What I Offer ?</h5>
      <h2> Services </h2>

      <div className='container services__container'>
        <article className='service'>

          <div className='service__head'>
            <h3> UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p> Interaction Design
</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p> User Interface Design
</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p> Responsive Design

</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p> User Research
</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p> Usability Testing

</p>
            </li>
          </ul>
        </article>

        {/**end of ui ux */}

        <article className='service'>

          <div className='service__head'>
            <h3> App Developement</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p> Custom mobile app development</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p> Cross-platform app development
</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p> App maintenance and support

</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p> Responsive mobile app design
</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p> Consultation and guidance
</p>
            </li>
          </ul>
        </article>





        {/** end */}


        <article className='service'>

          <div className='service__head'>
            <h3> Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Social media content creation

</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p> Video script 
</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p>SEO

</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Content strategy development
</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon' />
              <p> Content editing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
