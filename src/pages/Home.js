/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Product from '../components/Product'

const Home = () => {
  return (
    <div>
        
    <section className="hero-slider mb-5">
           
           <div className="single-slider">
               <div className="container">
                   <div className="row no-gutters">
                       <div className="col-lg-9 offset-lg-3 col-12">
                           <div className="text-inner mt-4">
                               <div className="row">
                                   <div className="col-md-9 col-12">
                                       <div className="hero-banner bg-light">
                                           <img src='https://via.placeholder.com/633x340' alt='' />
                                       </div>
                                   </div>
                                   <div className="col-md-3 col-12">
                                        <div className="row mb-3">
                                            <div className="col-6 col-md-12 hero-img">
                                                <img src="https://via.placeholder.com/190x160" alt="" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 col-md-12 hero-img">
                                                <img src="https://via.placeholder.com/190x160" alt="" />
                                            </div>
                                        </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
         
       </section>
     
       <section className="small-banner section">
           <div className="container">
               <div className="row">
                 
                   <div className="col-lg-4 col-md-6 col-12">
                       <div className="single-banner">
                           <img src="https://via.placeholder.com/600x370" alt="#" />
                           <div className="content">
                               <p>Man's Collectons</p>
                               <h3>Summer travel <br /> collection</h3>
                               <a href="#">Discover Now</a>
                           </div>
                       </div>
                   </div>
                  
                   <div className="col-lg-4 col-md-6 col-12">
                       <div className="single-banner">
                           <img src="https://via.placeholder.com/600x370" alt="#" />
                           <div className="content">
                               <p>Bag Collectons</p>
                               <h3>Awesome Bag <br /> 2020</h3>
                               <a href="#">Shop Now</a>
                           </div>
                       </div>
                   </div>
                  
                   <div className="col-lg-4 col-12">
                       <div className="single-banner tab-height">
                           <img src="https://via.placeholder.com/600x370" alt="#" />
                           <div className="content">
                               <p>Flash Sale</p>
                               <h3>Mid Season <br /> Up to <span>40%</span> Off</h3>
                               <a href="#">Discover Now</a>
                           </div>
                       </div>
                   </div>
                
               </div>
           </div>
       </section>
      
       <div className="product-area section">
               <div className="container">
                   <div className="row">
                       <div className="col-12">
                           <div className="section-title">
                               <h2>Trending Item</h2>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-12">
                           <div className="product-info">
                               <div className="nav-main">
                                 
                                   <ul className="nav nav-tabs" id="myTab" role="tablist">
                                       <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Man</a></li>
                                       <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Woman</a></li>
                                       <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Kids</a></li>
                                       <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Accessories</a></li>
                                       <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#essential" role="tab">Essential</a></li>
                                       <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#prices" role="tab">Prices</a></li>
                                   </ul>
                                  
                               </div>
                               <div className="tab-content" id="myTabContent">
                                  
                                   <div className="tab-pane fade show active" id="man" role="tabpanel">
                                       <div className="tab-single">
                                           <div className="row">
                                               <Product />
                                               <Product />
                                               <Product />
                                               <Product />
                                               <Product />
                                               <Product />
                                           </div>
                                       </div>
                                   </div>
                                  
                                   <div className="tab-pane fade" id="women" role="tabpanel">
                                       <div className="tab-single">
                                           <div className="row">
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Women Hot Collection</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Pink Show</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Bags Collection</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <span className="new">New</span>
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Women Pant Collectons</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Bags Collection</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <span className="price-dec">30% Off</span>
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Cap For Women</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Polo Dress For Women</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <span className="out-of-stock">Hot</span>
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Black Sunglass For Women</a></h3>
                                                           <div className="product-price">
                                                               <span className="old">$60.00</span>
                                                               <span>$50.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                  
                                   <div className="tab-pane fade" id="kids" role="tabpanel">
                                       <div className="tab-single">
                                           <div className="row">
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Women Hot Collection</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Pink Show</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Bags Collection</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <span className="new">New</span>
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Women Pant Collectons</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Bags Collection</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <span className="price-dec">30% Off</span>
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Cap For Women</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Polo Dress For Women</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <span className="out-of-stock">Hot</span>
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Black Sunglass For Women</a></h3>
                                                           <div className="product-price">
                                                               <span className="old">$60.00</span>
                                                               <span>$50.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                 
                                   <div className="tab-pane fade" id="accessories" role="tabpanel">
                                       <div className="tab-single">
                                           <div className="row">
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Women Hot Collection</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Pink Show</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Bags Collection</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <span className="new">New</span>
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Women Pant Collectons</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Bags Collection</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <span className="price-dec">30% Off</span>
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Cap For Women</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Polo Dress For Women</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />  
                                                               <span className="out-of-stock">Hot</span>
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Black Sunglass For Women</a></h3>
                                                           <div className="product-price">
                                                               <span className="old">$60.00</span>
                                                               <span>$50.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                              
                                   <div className="tab-pane fade" id="essential" role="tabpanel">
                                       <div className="tab-single">
                                           <div className="row">
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Women Hot Collection</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Pink Show</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Bags Collection</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <span className="new">New</span>
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Women Pant Collectons</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Bags Collection</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <span className="price-dec">30% Off</span>
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Cap For Women</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Polo Dress For Women</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <span className="out-of-stock">Hot</span>
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Black Sunglass For Women</a></h3>
                                                           <div className="product-price">
                                                               <span className="old">$60.00</span>
                                                               <span>$50.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                 
                                   <div className="tab-pane fade" id="prices" role="tabpanel">
                                       <div className="tab-single">
                                           <div className="row">
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Women Hot Collection</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Pink Show</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Bags Collection</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <span className="new">New</span>
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Women Pant Collectons</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Bags Collection</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <span className="price-dec">30% Off</span>
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Awesome Cap For Women</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                               <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Polo Dress For Women</a></h3>
                                                           <div className="product-price">
                                                               <span>$29.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                   <div className="single-product">
                                                       <div className="product-img">
                                                           <a href="#">
                                                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                               <span className="out-of-stock">Hot</span>
                                                           </a>
                                                           <div className="button-head">
                                                               <div className="product-action">
                                                                   <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                   <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                   <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                               </div>
                                                               <div className="product-action-2">
                                                                   <a title="Add to cart" href="#">Add to cart</a>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="product-content">
                                                           <h3><a href="#">Black Sunglass For Women</a></h3>
                                                           <div className="product-price">
                                                               <span className="old">$60.00</span>
                                                               <span>$50.00</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                 
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
       </div>
      
       <section className="midium-banner">
           <div className="container">
               <div className="row">
                 
                   <div className="col-lg-6 col-md-6 col-12">
                       <div className="single-banner">
                           <img src="https://via.placeholder.com/600x370" alt="#" />
                           <div className="content">
                               <p>Man's Collectons</p>
                               <h3>Man's items <br />Up to<span> 50%</span></h3>
                               <a href="#">Shop Now</a>
                           </div>
                       </div>
                   </div>
                
                   <div className="col-lg-6 col-md-6 col-12">
                       <div className="single-banner">
                           <img src="https://via.placeholder.com/600x370" alt="#" />
                           <div className="content">
                               <p>shoes women</p>
                               <h3>mid season <br /> up to <span>70%</span></h3>
                               <a href="#" className="btn">Shop Now</a>
                           </div>
                       </div>
                   </div>
                  
               </div>
           </div>
       </section>
     
       {/* <div className="product-area most-popular section">
           <div className="container">
               <div className="row">
                   <div className="col-12">
                       <div className="section-title">
                           <h2>Hot Item</h2>
                       </div>
                   </div>
               </div>
               <div className="row">
                   <div className="col-12">
                       <div className="owl-carousel popular-slider">
                        
                           <div className="single-product">
                               <div className="product-img">
                                   <a href="#">
                                       <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                       <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                       <span className="out-of-stock">Hot</span>
                                   </a>
                                   <div className="button-head">
                                       <div className="product-action">
                                           <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                           <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                           <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                       </div>
                                       <div className="product-action-2">
                                           <a title="Add to cart" href="#">Add to cart</a>
                                       </div>
                                   </div>
                               </div>
                               <div className="product-content">
                                   <h3><a href="#">Black Sunglass For Women</a></h3>
                                   <div className="product-price">
                                       <span className="old">$60.00</span>
                                       <span>$50.00</span>
                                   </div>
                               </div>
                           </div>
                        
                           <div className="single-product">
                               <div className="product-img">
                                   <a href="#">
                                       <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                       <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                   </a>
                                   <div className="button-head">
                                       <div className="product-action">
                                           <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                           <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                           <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                       </div>
                                       <div className="product-action-2">
                                           <a title="Add to cart" href="#">Add to cart</a>
                                       </div>
                                   </div>
                               </div>
                               <div className="product-content">
                                   <h3><a href="#">Women Hot Collection</a></h3>
                                   <div className="product-price">
                                       <span>$50.00</span>
                                   </div>
                               </div>
                           </div>
                         
                           <div className="single-product">
                               <div className="product-img">
                                   <a href="#">
                                       <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                       <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                       <span className="new">New</span>
                                   </a>
                                   <div className="button-head">
                                       <div className="product-action">
                                           <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                           <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                           <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                       </div>
                                       <div className="product-action-2">
                                           <a title="Add to cart" href="#">Add to cart</a>
                                       </div>
                                   </div>
                               </div>
                               <div className="product-content">
                                   <h3><a href="#">Awesome Pink Show</a></h3>
                                   <div className="product-price">
                                       <span>$50.00</span>
                                   </div>
                               </div>
                           </div>
                        
                           <div className="single-product">
                               <div className="product-img">
                                   <a href="#">
                                       <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                       <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                   </a>
                                   <div className="button-head">
                                       <div className="product-action">
                                           <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                           <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                           <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                       </div>
                                       <div className="product-action-2">
                                           <a title="Add to cart" href="#">Add to cart</a>
                                       </div>
                                   </div>
                               </div>
                               <div className="product-content">
                                   <h3><a href="#">Awesome Bags Collection</a></h3>
                                   <div className="product-price">
                                       <span>$50.00</span>
                                   </div>
                               </div>
                           </div>
                          
                       </div>
                   </div>
               </div>
           </div>
       </div> */}
      
       {/* <section className="shop-home-list section">
           <div className="container">
               <div className="row">
                   <div className="col-lg-4 col-md-6 col-12">
                       <div className="row">
                           <div className="col-12">
                               <div className="shop-section-title">
                                   <h1>On sale</h1>
                               </div>
                           </div>
                       </div>
                      
                       <div className="single-list">
                           <div className="row">
                               <div className="col-lg-6 col-md-6 col-12">
                                   <div className="list-image overlay">
                                       <img src="https://via.placeholder.com/115x140" alt="#" />
                                       <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                   </div>
                               </div>
                               <div className="col-lg-6 col-md-6 col-12 no-padding">
                                   <div className="content">
                                       <h4 className="title"><a href="#">Licity jelly leg flat Sandals</a></h4>
                                       <p className="price with-discount">$59</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                     
                       <div className="single-list">
                           <div className="row">
                               <div className="col-lg-6 col-md-6 col-12">
                                   <div className="list-image overlay">
                                       <img src="https://via.placeholder.com/115x140" alt="#" />
                                       <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                   </div>
                               </div>
                               <div className="col-lg-6 col-md-6 col-12 no-padding">
                                   <div className="content">
                                       <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                       <p className="price with-discount">$44</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                     
                       <div className="single-list">
                           <div className="row">
                               <div className="col-lg-6 col-md-6 col-12">
                                   <div className="list-image overlay">
                                       <img src="https://via.placeholder.com/115x140" alt="#" />
                                       <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                   </div>
                               </div>
                               <div className="col-lg-6 col-md-6 col-12 no-padding">
                                   <div className="content">
                                       <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                       <p className="price with-discount">$89</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                      
                   </div>
                   <div className="col-lg-4 col-md-6 col-12">
                       <div className="row">
                           <div className="col-12">
                               <div className="shop-section-title">
                                   <h1>Best Seller</h1>
                               </div>
                           </div>
                       </div>
                      
                       <div className="single-list">
                           <div className="row">
                               <div className="col-lg-6 col-md-6 col-12">
                                   <div className="list-image overlay">
                                       <img src="https://via.placeholder.com/115x140" alt="#" />
                                       <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                   </div>
                               </div>
                               <div className="col-lg-6 col-md-6 col-12 no-padding">
                                   <div className="content">
                                       <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                       <p className="price with-discount">$65</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                    
                       <div className="single-list">
                           <div className="row">
                               <div className="col-lg-6 col-md-6 col-12">
                                   <div className="list-image overlay">
                                       <img src="https://via.placeholder.com/115x140" alt="#" />
                                       <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                   </div>
                               </div>
                               <div className="col-lg-6 col-md-6 col-12 no-padding">
                                   <div className="content">
                                       <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                       <p className="price with-discount">$33</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                    
                       <div className="single-list">
                           <div className="row">
                               <div className="col-lg-6 col-md-6 col-12">
                                   <div className="list-image overlay">
                                       <img src="https://via.placeholder.com/115x140" alt="#" />
                                       <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                   </div>
                               </div>
                               <div className="col-lg-6 col-md-6 col-12 no-padding">
                                   <div className="content">
                                       <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                       <p className="price with-discount">$77</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                     
                   </div>
                   <div className="col-lg-4 col-md-6 col-12">
                       <div className="row">
                           <div className="col-12">
                               <div className="shop-section-title">
                                   <h1>Top viewed</h1>
                               </div>
                           </div>
                       </div>
                      
                       <div className="single-list">
                           <div className="row">
                               <div className="col-lg-6 col-md-6 col-12">
                                   <div className="list-image overlay">
                                       <img src="https://via.placeholder.com/115x140" alt="#" />
                                       <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                   </div>
                               </div>
                               <div className="col-lg-6 col-md-6 col-12 no-padding">
                                   <div className="content">
                                       <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                       <p className="price with-discount">$22</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   
                       <div className="single-list">
                           <div className="row">
                               <div className="col-lg-6 col-md-6 col-12">
                                   <div className="list-image overlay">
                                       <img src="https://via.placeholder.com/115x140" alt="#" />
                                       <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                   </div>
                               </div>
                               <div className="col-lg-6 col-md-6 col-12 no-padding">
                                   <div className="content">
                                       <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                       <p className="price with-discount">$35</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                      
                       <div className="single-list">
                           <div className="row">
                               <div className="col-lg-6 col-md-6 col-12">
                                   <div className="list-image overlay">
                                       <img src="https://via.placeholder.com/115x140" alt="#" />
                                       <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                   </div>
                               </div>
                               <div className="col-lg-6 col-md-6 col-12 no-padding">
                                   <div className="content">
                                       <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                       <p className="price with-discount">$99</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                     
                   </div>
               </div>
           </div>
       </section> */}
     
       {/* <section className="cown-down">
           <div className="section-inner ">
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-lg-6 col-12 padding-right">
                           <div className="image">
                               <img src="https://via.placeholder.com/750x590" alt="#" />
                           </div>	
                       </div>	
                       <div className="col-lg-6 col-12 padding-left">
                           <div className="content">
                               <div className="heading-block">
                                   <p className="small-title">Deal of day</p>
                                   <h3 className="title">Beatutyful dress for women</h3>
                                   <p className="text">Suspendisse massa leo, vestibulum cursus nulla sit amet, frungilla placerat lorem. Cars fermentum, sapien. </p>
                                   <h1 className="price">$1200 <s>$1890</s></h1>
                                 
                               </div>
                           </div>	
                       </div>	
                   </div>
               </div>
           </div>
       </section>
      
       <section className="shop-blog section">
           <div className="container">
               <div className="row">
                   <div className="col-12">
                       <div className="section-title">
                           <h2>From Our Blog</h2>
                       </div>
                   </div>
               </div>
               <div className="row">
                   <div className="col-lg-4 col-md-6 col-12">
                      
                       <div className="shop-single-blog">
                           <img src="https://via.placeholder.com/370x300" alt="#" />
                           <div className="content">
                               <p className="date">22 July , 2020. Monday</p>
                               <a href="#" className="title">Sed adipiscing ornare.</a>
                               <a href="#" className="more-btn">Continue Reading</a>
                           </div>
                       </div>
                      
                   </div>
                   <div className="col-lg-4 col-md-6 col-12">
                       
                       <div className="shop-single-blog">
                           <img src="https://via.placeholder.com/370x300" alt="#" />
                           <div className="content">
                               <p className="date">22 July, 2020. Monday</p>
                               <a href="#" className="title">Man???s Fashion Winter Sale</a>
                               <a href="#" className="more-btn">Continue Reading</a>
                           </div>
                       </div>
                     
                   </div>
                   <div className="col-lg-4 col-md-6 col-12">
                     
                       <div className="shop-single-blog">
                           <img src="https://via.placeholder.com/370x300" alt="#" />
                           <div className="content">
                               <p className="date">22 July, 2020. Monday</p>
                               <a href="#" className="title">Women Fashion Festive</a>
                               <a href="#" className="more-btn">Continue Reading</a>
                           </div>
                       </div>
                      
                   </div>
               </div>
           </div>
       </section> */}
      
       {/* <section className="shop-services section home">
           <div className="container">
               <div className="row">
                   <div className="col-lg-3 col-md-6 col-12">

                       <div className="single-service">
                           <i className="ti-rocket"></i>
                           <h4>Free shiping</h4>
                           <p>Orders over $100</p>
                       </div>
                      
                   </div>
                   <div className="col-lg-3 col-md-6 col-12">
                     
                       <div className="single-service">
                           <i className="ti-reload"></i>
                           <h4>Free Return</h4>
                           <p>Within 30 days returns</p>
                       </div>
                      
                   </div>
                   <div className="col-lg-3 col-md-6 col-12">
                     
                       <div className="single-service">
                           <i className="ti-lock"></i>
                           <h4>Sucure Payment</h4>
                           <p>100% secure payment</p>
                       </div>
                     
                   </div>
                   <div className="col-lg-3 col-md-6 col-12">
                     
                       <div className="single-service">
                           <i className="ti-tag"></i>
                           <h4>Best Peice</h4>
                           <p>Guaranteed price</p>
                       </div>
                       
                   </div>
               </div>
           </div>
       </section> */}
       
       <section className="shop-newsletter section">
           <div className="container">
               <div className="inner-top">
                   <div className="row">
                       <div className="col-lg-8 offset-lg-2 col-12">
                          
                           <div className="inner">
                               <h4>Newsletter</h4>
                               <p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
                               <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                                   <input name="EMAIL" placeholder="Your email address" required="" type="email" />
                                   <button className="btn">Subscribe</button>
                               </form>
                           </div>
                          
                       </div>
                   </div>
               </div>
           </div>
       </section>
      
       <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog">
               <div className="modal-dialog" role="document">
                   <div className="modal-content">
                       <div className="modal-header">
                           <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="ti-close" aria-hidden="true"></span></button>
                       </div>
                       <div className="modal-body">
                           <div className="row no-gutters">
                               <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                  
                                       <div className="product-gallery">
                                           <div className="quickview-slider-active">
                                               <div className="single-slider">
                                                   <img src="https://via.placeholder.com/569x528" alt="#" />
                                               </div>
                                               <div className="single-slider">
                                                   <img src="https://via.placeholder.com/569x528" alt="#" />
                                               </div>
                                               <div className="single-slider">
                                                   <img src="https://via.placeholder.com/569x528" alt="#" />
                                               </div>
                                               <div className="single-slider">
                                                   <img src="https://via.placeholder.com/569x528" alt="#" />
                                               </div>
                                           </div>
                                       </div>
                                  
                               </div>
                               <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                   <div className="quickview-content">
                                       <h2>Flared Shift Dress</h2>
                                       <div className="quickview-ratting-review">
                                           <div className="quickview-ratting-wrap">
                                               <div className="quickview-ratting">
                                                   <i className="yellow fa fa-star"></i>
                                                   <i className="yellow fa fa-star"></i>
                                                   <i className="yellow fa fa-star"></i>
                                                   <i className="yellow fa fa-star"></i>
                                                   <i className="fa fa-star"></i>
                                               </div>
                                               <a href="#"> (1 customer review)</a>
                                           </div>
                                           <div className="quickview-stock">
                                               <span><i className="fa fa-check-circle-o"></i> in stock</span>
                                           </div>
                                       </div>
                                       <h3>$29.00</h3>
                                       <div className="quickview-peragraph">
                                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam.</p>
                                       </div>
                                       <div className="size">
                                           <div className="row">
                                               <div className="col-lg-6 col-12">
                                                   <h5 className="title">Size</h5>
                                                   <select>
                                                       <option selected="selected">s</option>
                                                       <option>m</option>
                                                       <option>l</option>
                                                       <option>xl</option>
                                                   </select>
                                               </div>
                                               <div className="col-lg-6 col-12">
                                                   <h5 className="title">Color</h5>
                                                   <select>
                                                       <option selected="selected">orange</option>
                                                       <option>purple</option>
                                                       <option>black</option>
                                                       <option>pink</option>
                                                   </select>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="quantity">
                                          
                                           <div className="input-group">
                                               <div className="button minus">
                                                   <button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                                       <i className="ti-minus"></i>
                                                   </button>
                                               </div>
                                               <input type="text" name="quant[1]" className="input-number"  data-min="1" data-max="1000" value="1" />
                                               <div className="button plus">
                                                   <button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                                                       <i className="ti-plus"></i>
                                                   </button>
                                               </div>
                                           </div>
                                       
                                       </div>
                                       <div className="add-to-cart">
                                           <a href="#" className="btn">Add to cart</a>
                                           <a href="#" className="btn min"><i className="ti-heart"></i></a>
                                           <a href="#" className="btn min"><i className="fa fa-compress"></i></a>
                                       </div>
                                       <div className="default-social">
                                           <h4 className="share-now">Share:</h4>
                                           <ul>
                                               <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                               <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                               <li><a className="youtube" href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                               <li><a className="dribbble" href="#"><i className="fa fa-google-plus"></i></a></li>
                                           </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
       </div>
     
       <footer className="footer">
          
           <div className="footer-top section">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-5 col-md-6 col-12">
                           
                           <div className="single-footer about">
                               <div className="logo">
                                   <a href="#">Jassa</a>
                               </div>
                               <p className="text">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,  magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                               <p className="call">Got Question? Call us 24/7<span><a href="tel:123456789">+0123 456 789</a></span></p>
                           </div>
                          
                       </div>
                       <div className="col-lg-2 col-md-6 col-12">
                          
                           <div className="single-footer links">
                               <h4>Information</h4>
                               <ul>
                                   <li><a href="#">About Us</a></li>
                                   <li><a href="#">Faq</a></li>
                                   <li><a href="#">Terms & Conditions</a></li>
                                   <li><a href="#">Contact Us</a></li>
                                   <li><a href="#">Help</a></li>
                               </ul>
                           </div>
                         
                       </div>
                       <div className="col-lg-2 col-md-6 col-12">
                         
                           <div className="single-footer links">
                               <h4>Customer Service</h4>
                               <ul>
                                   <li><a href="#">Payment Methods</a></li>
                                   <li><a href="#">Money-back</a></li>
                                   <li><a href="#">Returns</a></li>
                                   <li><a href="#">Shipping</a></li>
                                   <li><a href="#">Privacy Policy</a></li>
                               </ul>
                           </div>
                         
                       </div>
                       <div className="col-lg-3 col-md-6 col-12">
                         
                           <div className="single-footer social">
                               <h4>Get In Tuch</h4>
                             
                               <div className="contact">
                                   <ul>
                                       <li>Ludhiana.</li>
                                       <li>Punjab, India.</li>
                                       <li>therichpost.com</li>
                                       <li>+0000000000</li>
                                   </ul>
                               </div>
                             
                               <ul>
                                   <li><a href="#"><i className="ti-facebook"></i></a></li>
                                   <li><a href="#"><i className="ti-twitter"></i></a></li>
                                   <li><a href="#"><i className="ti-flickr"></i></a></li>
                                   <li><a href="#"><i className="ti-instagram"></i></a></li>
                               </ul>
                           </div>
                          
                       </div>
                   </div>
               </div>
           </div>
         
           <div className="copyright">
               <div className="container">
                   <div className="inner">
                       <div className="row">
                           <div className="col-lg-6 col-12">
                               <div className="left">
                                   <p>Copyright ?? 2022 <a href="#" target="_blank">JumJum</a>  -  All Rights Reserved.</p>
                               </div>
                           </div>
                           <div className="col-lg-6 col-12">
                               <div className="right">
                                   <img src="assets/images/payments.png" alt="#" />
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </footer>

   </div>
  )
}

export default Home
