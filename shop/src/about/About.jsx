import React from 'react';
import Shipping from "../home/Shipping"
import UltraStore from './UltraStore';
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <section className="site-banner jarallax padding-large about-section-top">
        <img src="images/hero-image.jpg" alt="Hero" className="background-image" />
        <div className='about-us'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">About us</h1>
              <div className="breadcrumbs">
                <span className="item">
                <Link to="/"><a href="/">Home /</a></Link>
                </span>
                <span className="item">About</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <div className='about-section-shipping'>
      <Shipping></Shipping>
      <UltraStore></UltraStore>
      </div>
    </>
  );
}

export default About;
