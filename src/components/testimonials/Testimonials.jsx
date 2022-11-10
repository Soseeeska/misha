import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


/*Adding templates of testimonials */
const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'I was pleasantly surprised by the work done. The order was completed on time, pleasant communication accompanied me all the way.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Friends advised me of this person and I did not hesitate for a second to send a request for an order. Everything happened in the most positive environment, the employee fulfilled all my whims and I ended up liking the project very much'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Immediately I was attracted by the price for completing the task and I decided to order. I was a little worried, but everything was done well, in general I am happy with everything.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'In general, I am happy with everything. I needed a ready-made project in the shortest possible time, I had to pay a little extra and the work was done.'
  },
]

/* Ajusting of testimonials interface */
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
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

export default Testimonials