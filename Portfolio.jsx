import React from 'react'
import one from '../../assets/one.jpg'
import two from '../../assets/two.jpg'

import three from '../../assets/three.jpg'

import four from '../../assets/four.jpg'


import './portfolio.css'

const data=[
   {
    id:1,
    image :  one,
    title :'React Portfolio',
    github:' https://github.com',
    demo: 'https'
   },
   {
    id:2,
    image : two,
    title :' Quiz App',
    github:' https://github.com/Yashkadam07/QuizApp',
    demo: 'https'
   },
   {
    id:3,
    image : three,
    title :' Weather App',
    github:' https://github.com/Yashkadam07/WeatherApp',
    demo: 'https'
   },
   {
    id:4,
    image : four,
    title :'ToDo App React-Native',
    github:' https://github.com/Yashkadam07/ReactToDoAPP',
    demo: 'https'
   },
   {
    id:5,
    image :  one,
    title :'Transportation App',
    github:' https://github.com',
    demo: 'https'
   },
   {
    id:6,
    image :  one,
    title :'Digital Clock',
    github:' https://github.com/Yashkadam07/DigitalClock',
    demo: 'https'
   },
   {
    id:7,
    image :  one,
    title :'Notes App',
    github:' https://github.com/Yashkadam07/NotesApp',
    demo: 'https'
   },

  ]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        My Recent Work
      </h5>
      <h2> Portfolio</h2>

      <div className='container portfolio__container'>
         {
          data.map(({id,image,title,github,demo})=>{
            return(
            <article key={id} className='portfolio__item'>
               <div className='portfolio__item-image'>
                  <img  src={image} alt={title}/>
               </div>
               <h3>{title}</h3>
               <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='blank'> github</a>
                   {/*<a href={demo} className='btn btn-primary' target='_blank'> live demo</a> */}

               </div>

            </article>
            )
          })
         }

      

      </div>
    </section>
  )
}

export default Portfolio
