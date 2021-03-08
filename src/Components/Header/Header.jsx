import React from 'react';
import './Header.css';
// import {Myntra} from '../../Components';
import Myntra from '../Header/Myntra.png';
import Profile from '../Header/Profile.png';
import Wish from '../Header/Wish.png';
import Bag from '../Header/Bag.png';
import { Navbar } from '../../Components';
import { Searchbar } from '../../Components';

function Header() {
  return (
    <section className="header">
      <img src={Myntra} width="53px" height="36px" alt="Myntra"></img>
      <section className="parts_header">
        <Navbar />
      </section>
      <section className="parts_header">
        <Searchbar />
      </section>

      <img class='img' src={Profile} width="24px" height="24px" alt="Profile"></img>
      <figcaption class="a">Profile </figcaption>
      <img class='img' src={Wish} width="24px" height="24px" alt="Wish"></img>

      <div class="dropdown">
        <figcaption class="a">WishList</figcaption>
        <div id="myDropdow" class="dropdown-content">
          <a href='/'>Product Added </a>

        </div>
      </div>
      <img class='img' src={Bag} width="24px" height="24px" alt="Bag"></img>
      <figcaption class="a">Bag</figcaption>

    </section>
  )

}
export default Header;

