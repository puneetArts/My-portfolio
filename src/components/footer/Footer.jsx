import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PuneetArts</a>
      <ul className='permalinks'>
        <li className='permalinks-items'><a href="#">Home</a></li>
        <li className='permalinks-items'><a href="#about">About</a></li>
        <li className='permalinks-items'><a href="#experience">Experience</a></li>
        <li className='permalinks-items'><a href="#services">Services</a></li>
        <li className='permalinks-items'><a href="#portfolio">Portfolio</a></li>
        <li className='permalinks-items'><a href="#testimonial">Testimonials</a></li>
        <li className='permalinks-items'><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://instagram.com/puneetarts51"> <FaInstagram/></a>
        <a href="https://wa.me/919336809720"><FaWhatsapp/></a>
        <a href='https://linkedin.com' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/puneetArts' target='_blank'><FaGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; PuneetArts. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer