import React from 'react'

const Cart = () => {
  return (
    <>
    <div className="top_nav">
      <div className="container top_nav_container">
        <div className="top_nav_wrapper">
          <p className="tap_nav_p">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="#" className="top_nav_link">SHOP NOW</a>
        </div>
      </div>
    </div>
    <nav className="nav">
      <div className="container nav_container">
        <a href="#" className="nav_logo">EXCLUSIVE</a>
        <ul className="nav_list">
          <li className="nav_item"><a href="/" className="nav_link">Home</a></li>
          <li className="nav_item"><a href="#" className="nav_link">About</a></li>
          <li className="nav_item"><a href="#" className="nav_link">Contact</a></li>
          <li className="nav_item">
            <a href="./sign-up.html" className="nav_link">Sign up</a>
          </li>
        </ul>
        <div className="nav_items">
          <form action="#" className="nav_form">
            <input
              type="text"
              className="nav_input"
              placeholder="search here...." />
            <img src="./image/search.png" alt="" className="nav_search" />
          </form>
          <img src="./image/heart.png" alt="" className="nav_heart" />
          <a href="/cart.html">
            <img src="./image/cart.png" alt="" className="nav_cart" />
          </a>
        </div>
        <span className="hamburger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </span>
      </div>
    </nav>
    <nav className="mobile_nav mobile_nav_hide">
      <ul className="mobile_nav_list">
        <li className="mobile_nav_item">
          <a href="/" className="mobile_nav_link">Home</a>
        </li>
        <li className="mobile_nav_item">
          <a href="#" className="mobile_nav_link">About</a>
        </li>
        <li className="mobile_nav_item">
          <a href="#" className="mobile_nav_link">Contact</a>
        </li>
        <li className="mobile_nav_item">
          <a href="./sign-up.html" className="mobile_nav_link">Sign Up</a>
        </li>
        <li className="mobile_nav_item">
          <a href="/cart.html" className="mobile_nav_link">Cart</a>
        </li>
      </ul>
    </nav>

    <section className="section">
      <div className="container">
        <div className="cart">
          <div className="cart_header">
            <p className="cart_header_id">Product ID</p>
            <p className="cart_header_title">Product Title</p>
            <p className="cart_header_image">Product Image</p>
            <p className="cart_header_price">Price</p>
            <p className="cart_header_delete">Delete</p>
          </div>
          <div className="cart-items"></div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="container footer_container">
        <div className="footer_item">
          <a href="#" className="footer_logo">Exclusive</a>
          <div className="footer_p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem fuga harum voluptate?
          </div>
        </div>
        <div className="footer_item">
          <h3 className="footer_item_titl">Support</h3>
          <ul className="footer_list">
            <li className="li footer_list_item">Stockholm, Sweden</li>
            <li className="li footer_list_item">email@gmail.com</li>
            <li className="li footer_list_item">+46 123 456 78</li>
            <li className="li footer_list_item">+46 72 345 67</li>
          </ul>
        </div>
        <div className="footer_item">
          <h3 className="footer_item_titl">Support</h3>
          <ul className="footer_list">
            <li className="li footer_list_item">Account</li>
            <li className="li footer_list_item">Login / Register</li>
            <li className="li footer_list_item">Cart</li>
            <li className="li footer_list_item">Shop</li>
          </ul>
        </div>
        <div className="footer_item">
          <h3 className="footer_item_titl">Support</h3>
          <ul className="footer_list">
            <li className="li footer_list_item">Privacy policy</li>
            <li className="li footer_list_item">Terms of use</li>
            <li className="li footer_list_item">FAQ's</li>
            <li className="li footer_list_item">Contact</li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container footer_bottom_container">
          <p className="footer_copy">
            Copyright Exclusive 2023. All right reserved
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Cart
