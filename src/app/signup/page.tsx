"use client";

import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      {/* Top Navigation Bar */}
      <div className="top_nav">
        <div className="container top_nav_container">
          <div className="top_nav_wrapper">
            <p className="top_nav_p">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </p>
            <Link href="/shop" className="top_nav_link">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="nav">
        <div className="container nav_container">
          <Link href="/" className="nav_logo">
            EXCLUSIVE
          </Link>
          <ul className="nav_list">
            <li className="nav_item">
              <Link href="/" className="nav_link">
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link href="/about" className="nav_link">
                About
              </Link>
            </li>
            <li className="nav_item">
              <Link href="/contact" className="nav_link">
                Contact
              </Link>
            </li>
            <li className="nav_item">
              <Link href="/sign-up" className="nav_link">
                Sign up
              </Link>
            </li>
          </ul>
          <div className="nav_items">
            <form action="#" className="nav_form">
              <input type="text" className="nav_input" placeholder="Search here..." />
              <img src="/image/search.png" alt="Search" className="nav_search" />
            </form>
            <img src="/image/heart.png" alt="Wishlist" className="nav_heart" />
            <Link href="/cart">
              <img src="/image/cart.png" alt="Cart" className="nav_cart" />
            </Link>
          </div>
          <span className="hamburger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </span>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="mobile_nav mobile_nav_hide">
        <ul className="mobile_nav_list">
          <li className="mobile_nav_item">
            <Link href="/" className="mobile_nav_link">
              Home
            </Link>
          </li>
          <li className="mobile_nav_item">
            <Link href="/about" className="mobile_nav_link">
              About
            </Link>
          </li>
          <li className="mobile_nav_item">
            <Link href="/contact" className="mobile_nav_link">
              Contact
            </Link>
          </li>
          <li className="mobile_nav_item">
            <Link href="/sign-up" className="mobile_nav_link">
              Sign Up
            </Link>
          </li>
          <li className="mobile_nav_item">
            <Link href="/cart" className="mobile_nav_link">
              Cart
            </Link>
          </li>
        </ul>
      </nav>

      {/* Authentication Section */}
      <section className="section">
        <div className="auth_container">
          <div className="auth_img">
            <img src="/image/auth-image.png" alt="Auth" className="auth_image" />
          </div>
          <div className="auth_content">
            <form action="" className="auth_form">
              <h2 className="form_title">Create your account</h2>
              <p className="auth_p">Enter your details below</p>
              <div className="form_group">
                <input type="text" placeholder="Name" className="form_input" />
              </div>
              <div className="form_group">
                <input type="email" placeholder="Email" className="form_input" />
              </div>
              <div className="form_group form_pass">
                <input type="password" placeholder="Password" className="form_input" />
              </div>
              <div className="form_group">
                <button type="submit" className="form_btn">Create Account</button>
              </div>
              <div className="form_group">
                <span>
                  Already have an account?
                  <Link href="/login" className="form_auth_link"> Login</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container footer_container">
          <div className="footer_item">
            <Link href="/" className="footer_logo">
              Exclusive
            </Link>
            <div className="footer_p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem fuga harum voluptate?
            </div>
          </div>
          <div className="footer_item">
            <h3 className="footer_item_title">Support</h3>
            <ul className="footer_list">
              <li className="footer_list_item">Stockholm, Sweden</li>
              <li className="footer_list_item">email@gmail.com</li>
              <li className="footer_list_item">+46 123 456 78</li>
              <li className="footer_list_item">+46 72 345 67</li>
            </ul>
          </div>
          <div className="footer_item">
            <h3 className="footer_item_title">Account</h3>
            <ul className="footer_list">
              <li className="footer_list_item">Login / Register</li>
              <li className="footer_list_item">Cart</li>
              <li className="footer_list_item">Shop</li>
            </ul>
          </div>
          <div className="footer_item">
            <h3 className="footer_item_title">Information</h3>
            <ul className="footer_list">
              <li className="footer_list_item">Privacy Policy</li>
              <li className="footer_list_item">Terms of Use</li>
              <li className="footer_list_item">FAQ&apos;s</li>
              <li className="footer_list_item">Contact</li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container footer_bottom_container">
            <p className="footer_copy">
              Copyright Exclusive 2023. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
