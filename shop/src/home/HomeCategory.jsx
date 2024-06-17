import React from 'react'
import { Link } from 'react-router-dom';



const products = [
     {
       img: 'images/product-item1.jpg',
       altText: 'Books',
       title: 'Full sleeve cover shirt',
       price: '$40.00',
       link: 'single-product.html',
     },
     {
       img: 'images/product-item2.jpg',
       altText: 'Books',
       title: 'Volunteer Half blue',
       price: '$38.00',
       link: 'single-product.html',
     },
     {
       img: 'images/product-item3.jpg',
       altText: 'Books',
       title: 'Double yellow shirt',
       price: '$44.00',
       link: 'single-product.html',
     },
     {
       img: 'images/product-item4.jpg',
       altText: 'Books',
       title: 'Long belly grey pant',
       price: '$33.00',
       link: 'single-product.html',
     },
   ];

const HomeCategory = () => {
  return (
   <>
  <div className="container my-5">
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h2 className="fw-bold">Featured Products</h2>
    <a href="#" className="text-decoration-none"> <Link to ="/shop">View All Products </Link> &rarr; </a>
  </div>
  <div className="row">
    {products.map((product) => (
    <div key="{product.id}" className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={product.img} className="card-img-top" alt="{product.name}" />
        <div className="card-body text-center">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text text-primary">{product.price}</p>
        </div>
      </div>
      
    </div>
    ))}
  </div>
</div>
   
   </>
  )
}

export default HomeCategory;