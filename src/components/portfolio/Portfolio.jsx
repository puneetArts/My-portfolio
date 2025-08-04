import React from 'react'
import './Portfolio.css'
import IMG from '../../assets/portfolio 1.png';
import IMG2 from '../../assets/portfolio 2.png';
import IMG3 from '../../assets/portfolio 3.png';
import IMG4 from '../../assets/portfolio 4.png';
import IMG5 from '../../assets/portfolio 5.png';
import IMG6 from '../../assets/portfolio 6.png';


// data array
const data=[
  {
    id:1,
    image:IMG,
    title:'Event Management Website',
    github:"http://github.com",
    demo:"http://dribble.com/Alien_pixels"
  },
  {
    id:2,
    image:IMG2,
    title:'Art Exhibition Website',
    github:"http://github.com",
    demo:"http://dribble.com/Alien_pixels"
  },
  {
    id:3,
    image:IMG3,
    title:'E-commerce Website',
    github:"http://github.com",
    demo:"http://dribble.com/Alien_pixels"
  },
  {
    id:4,
    image:IMG4,
    title:'Photography Website',
    github:"http://github.com",
    demo:"http://dribble.com/Alien_pixels"
  },
  {
    id:5,
    image:IMG5,
    title:'Finance Website',
    github:"http://github.com",
    demo:"http://dribble.com/Alien_pixels"
  },
  {
    id:6,
    image:IMG6,
    title:'Content Management Website',
    github:"http://github.com",
    demo:"http://dribble.com/Alien_pixels"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title, github,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
             <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta' >
            <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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

// <div className="container portfolio__container">
//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//              <img src={IMG} alt='IMG1'/>
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className='portfolio__item-cta' >
//             <a href="http://github.com" className='btn' target='_blank'>Github</a>
//           <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>
//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//              <img src={IMG} alt='IMG1'/>
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className='portfolio__item-cta' >
//             <a href="http://github.com" className='btn' target='_blank'>Github</a>
//           <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>
//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//              <img src={IMG} alt='IMG1'/>
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className='portfolio__item-cta' >
//             <a href="http://github.com" className='btn' target='_blank'>Github</a>
//           <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>
//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//              <img src={IMG} alt='IMG1'/>
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className='portfolio__item-cta' >
//             <a href="http://github.com" className='btn' target='_blank'>Github</a>
//           <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>
//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//              <img src={IMG} alt='IMG1'/>
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className='portfolio__item-cta' >
//             <a href="http://github.com" className='btn' target='_blank'>Github</a>
//           <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>
//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//              <img src={IMG} alt='IMG1'/>
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className='portfolio__item-cta' >
//             <a href="http://github.com" className='btn' target='_blank'>Github</a>
//           <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>
        
//       </div>