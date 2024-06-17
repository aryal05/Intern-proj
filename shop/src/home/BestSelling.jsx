import React from 'react';
import styles from './BestSelling.module.css'; // Import CSS module for scoped styling
import { Link } from 'react-router-dom';

const products = [
  { id: 1, image: 'images/selling-products1.jpg', title: 'Half Sleeve T-Shirt', price: 40.00 },
  { id: 2, image: 'images/selling-products2.jpg', title: 'Stylish Grey T-Shirt', price: 35.00 },
  { id: 3, image: 'images/selling-products3.jpg', title: 'Silk White Shirt', price: 35.00 },
  { id: 4, image: 'images/selling-products5.jpg', title: 'Grunge Hoodie', price: 30.00 },
  { id: 5, image: 'images/selling-products4.jpg', title: 'Full sleeve Jeans jacket', price: 40.00 },
  { id: 6, image: 'images/selling-products7.jpg', title: 'Grey Check Coat', price: 30.00 },
  { id: 7, image: 'images/selling-products6.jpg', title: 'Long Sleeve T-shirt', price: 40.00 },
  { id: 8, image: 'images/selling-products13.jpg', title: 'Half Sleeve T-shirt', price: 35.00 },
  { id: 9, image: 'images/selling-products14.jpg', title: 'Orange white Nike', price: 55.00 },
  { id: 10, image: 'images/selling-products15.jpg', title: 'Running Shoe', price: 65.00 },
  { id: 11, image: 'images/selling-products15.jpg', title: 'Tennis Shoe', price: 80.00 },
  { id: 12, image: 'images/selling-products13.jpg', title: 'Nike Brand Shoe', price: 60.00 },
];

const BestSelling = () => {
  return (
    <>
    <div className='selling-top'>
      <div className="container py-5" >
        <h2 className="h4 mb-4">Best Selling Products</h2>
        <div className="d-flex mb-4">
         <Link to="/shop"> <a href="#" className="text-muted me-3">All</a></Link>
         <Link to="/shop"><a href="#" className="text-muted me-3">Shoes</a></Link>
         <Link to="/shop"><a href="#" className="text-muted me-3">Tshirts</a></Link>
         <Link to="/shop"><a href="#" className="text-muted me-3">Pants</a></Link>
         <Link to="/shop"><a href="#" className="text-muted me-3">Hoodie</a></Link>
         <Link to="/shop"><a href="#" className="text-muted me-3">Outer</a></Link>
         <Link to="/shop"><a href="#" className="text-muted me-3">Jackets</a></Link>
         <Link to="/shop"><a href="#" className="text-muted me-3">Accessories</a></Link>
        </div>
        <div className="row g-4">
          {products.map(product => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-3">
              <div className={`card h-100 ${styles.productCard}`}>
                <div className={styles.cardImageWrapper}>
                  <img src={product.image} className="card-img-top" alt={product.title} />
                  <div className={styles.hoverButtons}>
                    <button type="button" className={`btn-wrap cart-link ${styles.cartButton}`}>
                      add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className={`view-btn tooltip ${styles.viewButton}`}>
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className={`wishlist-btn ${styles.wishlistButton}`}>
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="text-primary pric">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default BestSelling;
