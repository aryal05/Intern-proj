import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./ShopItems.module.css";
import Search from './Search';
import Pagination from './Pagination';

const products = [
  { id: 1, image: 'images/selling-products1.jpg', title: 'Half Sleeve T-Shirt', category: 'Tshirts', price: 40.00 },
  { id: 2, image: 'images/selling-products2.jpg', title: 'Stylish Grey T-Shirt', category: 'Tshirts', price: 35.00 },
  { id: 3, image: 'images/selling-products3.jpg', title: 'Silk White Shirt', category: 'Tshirts', price: 35.00 },
  { id: 4, image: 'images/selling-products5.jpg', title: 'Grunge Hoodie', category: 'Hoodie', price: 30.00 },
  { id: 5, image: 'images/selling-products4.jpg', title: 'Full sleeve Jeans jacket', category: 'Jackets', price: 40.00 },
  { id: 6, image: 'images/selling-products7.jpg', title: 'Grey Check Coat', category: 'Outer', price: 30.00 },
  { id: 7, image: 'images/selling-products6.jpg', title: 'Long Sleeve T-shirt', category: 'Tshirts', price: 40.00 },
  { id: 8, image: 'images/selling-products13.jpg', title: 'Half Sleeve T-shirt', category: 'Tshirts', price: 35.00 },
  { id: 9, image: 'images/selling-products14.jpg', title: 'Orange white Nike', category: 'Shoes', price: 55.00 },
  { id: 10, image: 'images/selling-products15.jpg', title: 'Running Shoe', category: 'Shoes', price: 65.00 },
  { id: 11, image: 'images/selling-products15.jpg', title: 'Tennis Shoe', category: 'Shoes', price: 80.00 },
  { id: 12, image: 'images/selling-products13.jpg', title: 'Nike Brand Shoe', category: 'Shoes', price: 60.00 },
  { id: 13, image: 'images/selling-products13.jpg', title: 'Pants', category: 'Pants', price: 60.00 },
  { id: 14, image: 'images/selling-products13.jpg', title: 'Nike Brand Shoe', category: 'Shoes', price: 60.00 },
  { id: 15, image: 'images/selling-products13.jpg', title: 'Pants', category: 'Pants', price: 60.00 },
];

const ShopItems = () => {
  const [category, setCategory] = useState('All');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
 

  const filteredProducts = category === 'All'
    ? products
    : products.filter(product => product.category === category);

  // Pagination

     
 

     // Function to change the current page

  return (
    <>
      <div className="d-flex mb-4 trending-items">
        <Link to="/shop" onClick={() => handleCategoryChange('All')}><a href="#" className="text-muted me-3">All</a></Link>
        <Link to="/shop" onClick={() => handleCategoryChange('Shoes')}><a href="#" className="text-muted me-3">Shoes</a></Link>
        <Link to="/shop" onClick={() => handleCategoryChange('Tshirts')}><a href="#" className="text-muted me-3">Tshirts</a></Link>
        <Link to="/shop" onClick={() => handleCategoryChange('Pants')}><a href="#" className="text-muted me-3">Pants</a></Link>
        <Link to="/shop" onClick={() => handleCategoryChange('Hoodie')}><a href="#" className="text-muted me-3">Hoodie</a></Link>
        <Link to="/shop" onClick={() => handleCategoryChange('Outer')}><a href="#" className="text-muted me-3">Outer</a></Link>
        <Link to="/shop" onClick={() => handleCategoryChange('Jackets')}><a href="#" className="text-muted me-3">Jackets</a></Link>
        <Link to="/shop" onClick={() => handleCategoryChange('Accessories')}><a href="#" className="text-muted me-3">Accessories</a></Link>
      </div>
      <div className='shop-item'>
        <div className="row g-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-3">
              <div className={`card h-100 ${styles.productCard}`}>
                <div className={styles.cardImageWrapper}>
                 <Link to={`/shop/${product.id}`}><img src={product.image} className="card-img-top" alt={product.title} /></Link> 
                  <div className={styles.hoverButtons}>
                    <button type="button" className={`btn-wrap cart-link ${styles.cartButton}`}>
                      add to cart <i class='bx bx-right-arrow-alt'></i>
                    </button>
                    <button type="button" className={`view-btn tooltip ${styles.viewButton}`}>
                    {/* <i class='bx bx-street-view bx-flashing' ></i> */}
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className={`wishlist-btn ${styles.wishlistButton}`}>
                    {/* <i class='bx bx-low-vision bx-flashing' ></i> */}
                    </button>
                  </div>
                </div>
                <div className="card-body">
                <Link to={`/shop/${product.id}`}> <h5 className="card-title">{product.title}</h5></Link>
                  <p className="text-primary pric">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination/>

  <Search/>
    </>
  );
};

export default ShopItems;
