import React from 'react'

const Discount = () => {
  return (
   <>
    <section id="subscribe" class="padding-large dis-s">
      <div class="container dis-top">
        <div class="row">
          <div class="block-text col-md-6 dis">
            <div class="section-header">
              <h2 class="section-title">Get 25% off Discount Coupons</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.</p>
            <div class="subscribe-content col-md-6 dis-btn">
            <form id="form" class="d-flex justify-content-between">
              <input type="text" name="email" placeholder="Enter your email addresss here"/>
              <button class="btn btn-dark">Subscribe Now</button>
            </form>
          </div>
           </div>
          


        </div>
      </div>
    </section>
   </>
  )
}

export default Discount