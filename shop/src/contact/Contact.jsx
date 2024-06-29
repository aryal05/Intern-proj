import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'
const Contact = () => {
  return (
  <>
   <section className="site-banner jarallax padding-large about-section-top">
        <img src="images/hero-image.jpg" alt="Hero" className="background-image" />
        <div className='about-us'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">Contact Us</h1>
              <div className="breadcrumbs">
                <span className="item">
                <Link to="/"><a href="/">Home /</a></Link>
                </span>
                <span className="item">Contact Us                                                                                                                     </span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm/>
  
  </>
  )
}

export default Contact