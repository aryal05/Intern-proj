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
                              <li><Link to ="/">Home</Link></li>
                              <li><Link to ="/about">About</Link></li>
                              <li><Link to ="/shop">Shop</Link></li>
                              <li><Link to ="/pages">Pages</Link></li>
                              <li><Link to ="/blog">Blog</Link></li>
                              <li><Link to ="/contact">Contact</Link></li>
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