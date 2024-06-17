import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
     <header id="header" className='head'>
      <div id="header-wrap">
        <nav class="secondary-nav border-bottom">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div class="col-md-4 header-contact ">
                <p>Let's talk! <strong>+57 444 11 00 35</strong>
                </p>
              </div>
              <div class="col-md-4 shipping-purchase text-center ">
                <p>Free shipping on a purchase value of $200</p>
              </div>
              <div class="col-md-4 col-sm-12 user-items icons">
                <ul class="d-flex justify-content-end list-unstyled">
                  <li>
                    <a href="login.html">
                    <i class='bx bx-user icon'></i>
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">
                    <i class='bx bx-cart icon'></i>
                    </a>
                  </li>
                  <li>
                    <a href="wishlist.html">
                    <i class='bx bx-heart icon' ></i>
                    </a>
                  </li>
                  <li class="user-items search-item pe-3">
                  <Link to="/search"><a href="#" class="search-button">
                    <i class='bx bx-search bx-flip-horizontal icon' ></i>
                    </a></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        </div>
        </header>
        


</>
  )
}

export default NavBar