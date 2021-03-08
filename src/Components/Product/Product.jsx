import React from "react";
import products from "../../myntra";
import Wish from '../Header/Wish.png';
require("./product.css");

function Product() {
  const productList = products.searchData.results.products;
  const handleClick = () => {
    document.getElementById("myDropdow").classList.toggle("show");
  }
  return (
    <div className="product">
      {productList.map((product, idx) => {
        return (
          <div key={idx} className="product-container">
            <a href={`https://www.myntra.com/${product.landingPageUrl}`} >
              <img className="image" src={product.searchImage} alt={product.productName} />

              <div class="wishlist" >
                <button onClick={handleClick} >Add to my Wishlist<img class='img' src={Wish} width="20px" height="20px" alt="Wish"></img>
                </button>
              </div>
            </a>
            <div class="hide"><b>{product.brand}</b><br></br>
              {product.additionalInfo}<br></br>
              <b>{'Rs.' + product.price}</b>
              <div class='Discount'>
                {product.discountDisplayLabel}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Product;