import React from 'react'
import './About.css'
import Me from '../../assets/A51.png'
import { TbAwardFilled } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderCopy } from "react-icons/md";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbAwardFilled className='about__icon' />
              <h5>Experience</h5>
              <small>1+ years</small>


            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>20+ Clients</small>


            </article>
            <article className='about__card'>
              <MdOutlineFolderCopy className='about__icon' />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>

          <p>A creative and dedicated individual passionate about design and technology. Currently honing my skills in Web Development and UI/UX designing, I am eager to expand my knowledge by mastering the entire process of designing and developing user-friendly applications and  websites while continuously learning and growing in the field of modern technology.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>

  )
}

export default About