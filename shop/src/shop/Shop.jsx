import React from 'react'
import { Link } from 'react-router-dom'
import ShopItems from './ShopItems' 

const Shop = () => {
  return (
    <>
     <section className="site-banner jarallax padding-large about-section-top">
        <img src="images/hero-image.jpg" alt="Hero" className="background-image" />
        <div className='about-us'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">Shop Page</h1>
              <div className="breadcrumbs">
                <span className="item">
                <Link to="/"><a href="/">Home /</a></Link>
                </span>
                <span className="item">Shop</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <ShopItems/>
    </>
  )
}

export default Shop