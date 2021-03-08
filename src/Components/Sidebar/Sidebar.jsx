import React, { useState } from "react";
import products, { searchData } from "../../myntra";
import './Sidebar.css';

function Sidebar() {
  const productList = products.searchData.results.products;
  let onlybrands = [];
  const [selectedSortOption, setSelectedSortOption] = useState("")

  for (var i = 0; i < productList.length; i++) {
    if (onlybrands.includes(productList[i].brand) === false) {
      onlybrands.push(productList[i].brand);
    }
  }
  const handleSortOptions = (option) => {
    setSelectedSortOption(option);
  }
  let sortOptions = searchData.results.sortOptions

  return (
    <div className="product">
      <div className="Sortby" name="search_text" id="search_text" >
        Sort By: {selectedSortOption}
        <select>
          {sortOptions.map((option) => {
            return <option onClick={() => handleSortOptions(option)} value={option}>{option}</option>
          })}
        </select>
      </div>
      <h2>Brands</h2>
      {
        <div className="sidebar-container">
          {
            onlybrands.map((brand, idx) => {
              return <div>
                <input id={idx} type="checkbox" value={brand} />
                <label>{brand}</label> <br></br>

              </div>
            })
          }
        </div>
      }
      <h2>Categories</h2>
      {
        <div className="sidebar-container">

          <input type="checkbox" value='shirts' />
          <label>shirts</label> <br></br>
          <input type="checkbox" value='sleep shirts' />
          <label>sleep shirts</label> <br></br>

        </div>
      }
    </div>
  );
}

export default Sidebar;
