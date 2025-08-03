import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/meD3.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <h5> Hello I'm</h5>
          <h1>Puneet Singh</h1>
          <h5 className='text-light'>Frontend Developer | Artist</h5>
          <CTA/>
          <HeaderSocial/>
          <div className='me'>
            <img src={ME} alt='me' className='me-pic'></img>
          </div>
          <a href='#contact' className='scroll__down' > Scroll Down</a>
        </div>
    </header>
  )
}

export default Header