import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const Nav = () => {
     const [menuToggle, setMenuToggle] = useState(false)
     const [socialToggle, setSocialToggle] = useState(false)
     const [headerFixed, setHeaderFixed] = useState(false)
   window.addEventListener("scroll",() =>{
     if(window.scrollY >200){
          setHeaderFixed(true)
     }else{
          setHeaderFixed(false)
     }
   })

     const title = "Ultras."
     const p = "Casual Wear Store"


  return (
    <>
    {/* Menu Area */}
    <header className="header-section flex">
    <div className='ultras'>
    <h1>{title}</h1>
   
   <p className='casual-wear'>{p}</p>
   </div>
    
    <div className='menu-area list'>
     <div className='menu'>
                         <ul className={`lab-ul btn${menuToggle ? "active" : ""}`}>
                              <li><Link to ="/" className='nav-section-color'>Home</Link>
                              <div className="dropdown-menu"></div>
                              <ul className='drop-menu'>
                                   <li>
                                   <a href="/" className='nav-section-color'>Home</a>
                                        <a href="#">Home V2 <span className = "menu-pro">(Pro)</span></a>
                                   </li>
                              </ul>
                              
                              
                              
                              </li>
                              <li><Link to ="/about" className='nav-section-color'>About</Link></li>
                              <li><Link to ="/shop" className='nav-section-color'>Shop</Link>
                              <div className="dropdown-menu"></div>
                              <ul className='drop-menu'>
                                   <li>
                                        <a href="/shop">Shop</a>
                                        <a href="#">Shop Slider <span className = "menu-pro">(Pro)</span></a>
                                        <a href="#">Shop Grid <span className = "menu-pro">(Pro)</span></a>
                                        <a href="#">Shop List<span className = "menu-pro">(Pro)</span></a>
                                        <a href="#">Single Product <span className = "menu-pro">(Pro)</span></a>
                                        <a href="#">Cart <span className = "menu-pro">(Pro)</span></a>
                                        <a href="#">WishList<span className = "menu-pro">(Pro)</span></a>
                                        <a href="#">CheckOut<span className = "menu-pro">(Pro)</span></a>
                                   </li>
                              </ul>
                              
                              
                              
                              </li>
                              <li> <Link to ="/pages" className='nav-section-color'>Pages</Link>
                              <div className="dropdown-menu"></div>
                              <ul className='drop-menu'>
                                   <li>
                                        <a href="#">Coming Soon <span className = "menu-pro">(Pro)</span></a>
                                        <a href="#">Login<span className = "menu-pro">(Pro)</span></a>
                                        <a href="#">FAQS<span className = "menu-pro">(Pro)</span></a>
                                        <a href="#">Styles</a>
                                        <a href="#">Thank You</a>
                                        <a href="#">Error Page <span className = "menu-pro">(Pro)</span></a>
                                        
                                   </li>
                              </ul>
                              
                              
                              
                              </li>
                              <li><Link to ="/blog" className='nav-section-color'>Blogs</Link>
                              <div className="dropdown-menu"></div>
                              <ul className='drop-menu'>
                                   <li>
                                        <a href="/blog">Blog</a>
                                        <a href="#">Blog With Slider <span className = "menu-pro">(Pro)</span></a>
                                        <a href="#">Blog Masonry<span className = "menu-pro">(Pro)</span></a>
                                        <a href="#">Single Post</a>
                                     
                                        
                                   </li>
                              </ul>
                              
                              
                              
                              </li>
                              <li><Link to ="/contact" className='nav-section-color'>Contact</Link></li>
                         </ul>

                    </div>
                    </div>
                    {/* menuToggler */}
                    <div onClick={()=> setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle? "active" : ""}`}>
                         <span></span>
                         <span></span>
                         <span></span>


                    </div>
    </header>
    
  
    
    
    
    </>
  )
}

export default Nav;