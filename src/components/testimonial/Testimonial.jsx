import React from 'react'
import './Testimonial.css'
import  AVTR1 from  '../../assets/avt1.png'
import  AVTR2 from  '../../assets/avt2.png'
import  AVTR3 from  '../../assets/avt4.png'

// core version + navigation, pagination modules:
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    id:1,
    image:AVTR1,
    name:'Mrs River',
    review:'"Puneet did an amazing job on our website’s UI. The design is clean, modern, and responsive across all devices. Communication was smooth, and every detail we requested was implemented perfectly."',
    
  },
  {
    id:2,
    image:AVTR2,
    name:'Mr Bob',
    review:'"I’m impressed with the speed and quality of work. The site loads quickly, looks professional, and works flawlessly. Puneet truly understands user experience and design aesthetics."',
    
  },
  {
    id:3,
    image:AVTR3,
    name:'Miss Meera',
    review:'"The frontend was delivered exactly as per our vision. The animations and color scheme really brought our brand to life. Great attention to detail and excellent problem-solving throughout the project."',
    
  }
]
const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Client</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonials__container" 
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({id,image,name, review})=>{
            return(
              <SwiperSlide key={id} className='testimonial'>
          <div className="client__avatar">
            <img src={image} alt='avtr1'/>
            
          </div>
         <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial
