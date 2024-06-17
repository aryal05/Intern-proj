import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
<>
<section className="site-banner jarallax padding-large about-section-top">
        <img src="images/hero-image1.jpg" alt="Hero" className="background-image" />
        <div className='about-us'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">BLOG PAGE</h1>
              <div className="breadcrumbs">
                <span className="item">
                 <Link to="/"><a href="/">Home /</a></Link>
                </span>
                <span className="item">Blog</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

</>
  )
}

export default Blog