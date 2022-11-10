import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          
          {/* IU/UX table */}

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom-tailored design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creative solutions</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Quality over quantity</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Streamlined process</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Transparent collaboration</p>
            </li>
          </ul>
        </article>

        {/* Web Development table */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web portals</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web sites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ecommerce</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Enterprise (corporate) web solutions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Front-end design and development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Help desk.</p>
            </li>
          </ul>
        </article>

        {/* Content creation table */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Blog posts</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Long-form content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Online guides</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Infographics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Micrographics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Videos</p>
            </li>
          </ul>
        </article>
       
      </div>
    </section>
  )
}

export default Services