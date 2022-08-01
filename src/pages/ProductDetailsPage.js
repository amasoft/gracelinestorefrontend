import React from 'react'
import Product from '../components/Product'

const ProductDetailsPage = () => {
  return (
    <div className='container'>
      <div className="product-detail-container row">
        <div className='col-lg-5'>
          <div className="image-container">
            <img src="https://via.placeholder.com/750x750" className="product-detail-image" />
          </div>
          <div className="small-images-container">
              <img 
                src="https://via.placeholder.com/100x100"
                className="small-image selected-image"
                // onMouseEnter={() => setIndex(i)}
              />
              <img 
                src="https://via.placeholder.com/100x100"
                className="small-image selected-image"
                // onMouseEnter={() => setIndex(i)}
              />
              <img 
                src="https://via.placeholder.com/100x100"
                className="small-image selected-image"
                // onMouseEnter={() => setIndex(i)}
              />
              <img 
                src="https://via.placeholder.com/100x100"
                className="small-image selected-image"
                // onMouseEnter={() => setIndex(i)}
              />
              <img 
                src="https://via.placeholder.com/100x100"
                className="small-image selected-image"
                // onMouseEnter={() => setIndex(i)}
              />
          </div>
        </div>

        <div className="col-lg-7">
        <div className="product-detail-desc">
          <h1>Product name</h1>
          <div className="reviews">
            <div>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quisquam ducimus quod dolores. Excepturi expedita animi sit, cum impedit ab, iste fugit omnis, veniam dolore nulla nesciunt similique? Officiis, consequatur? Voluptatibus, doloremque soluta. Odit perspiciatis quaerat id officiis ipsa delectus distinctio dolore commodi repellendus praesentium consequuntur, quisquam at alias rerum? </p>
          <p className="price">$300:00</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus">-</span>
              <span className="num">1</span>
              <span className="plus">+</span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart">Add to Cart</button>
            <button type="button" className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
                <Product  />
                <Product  />
                <Product  />
                <Product  />
                <Product  />
                <Product  />
                <Product  />
                <Product  />
                <Product  />
                <Product  />
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage
