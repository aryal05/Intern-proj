import React from 'react'
import Quotes from '../home/Quotes'
// import Journal from '../Journal'

const UltraStore = () => {
  return (
    <>
    <section id="about-us">
      <div class="container ">
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="image-holder">
              <img src="images/single-image1.jpg" alt="single" class="about-image"/>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="detail">
              <div class="display-header">
                <h2 class="section-title how-started">How was Ultras Store started?</h2>
                <p>Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at.
                <br/>
                Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur diam senectus congue velit et. </p>
                <div class="btn-wrap">
                  <a href="shop.html" class="btn btn-dark btn-medium d-flex shop-our-store" tabindex="0">SHOP OUR STORE<i class='bx bx-right-arrow-alt'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Quotes/>
   

    
    </>
  )
}

export default UltraStore