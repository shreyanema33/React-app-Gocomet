import React, { useState } from "react";
import data from "../../myntra";
import "./Searchbar.css";

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    setSearchList([]);
    document.getElementById("myDropdown").classList.toggle("show");
    let list = products.filter((product) => {
      return product.productName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });
    setSearchList(list);
  };
  const products = data.searchData.results.products;
  return (
    <section className="Search">
      <div class="dropdown2">
        <input className="searchBox"
          placeholder="Search for products, brands and more"
          value={searchQuery}
          onChange={(e) => handleChange(e)}>
        </input>
        <div id="myDropdown" class="dropdown-content">
          {searchList.map((product, idx) => {
            return (
              <div key={idx}>
                <a href={product.landingPageUrl}>
                  {product.productName}</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Searchbar;
