"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const LoginPage = () => {
  return (
    <>
      <div className="top_nav">
        <div className="container top_nav_container">
          <div className="top_nav_wrapper">
            <p className="tap_nav_p">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </p>
            <Link href="#" className="top_nav_link">SHOP NOW</Link>
          </div>
        </div>
      </div>

      <nav className="nav">
        <div className="container nav_container">
          <Link href="#" className="nav_logo">EXCLUSIVE</Link>
          <ul className="nav_list">
            <li className="nav_item"><Link href="/" className="nav_link">Home</Link></li>
            <li className="nav_item"><Link href="#" className="nav_link">About</Link></li>
            <li className="nav_item"><Link href="#" className="nav_link">Contact</Link></li>
            <li className="nav_item"><Link href="/sign-up" className="nav_link">Sign up</Link></li>
          </ul>
          <div className="nav_items">
            <form action="#" className="nav_form">
              <input type="text" className="nav_input" placeholder="Search here..." />
              <Image src="/image/search.png" alt="Search" width={20} height={20} />
            </form>
            <Image src="/image/heart.png" alt="Wishlist" width={20} height={20} />
            <Link href="/cart">
              <Image src="/image/cart.png" alt="Cart" width={20} height={20} />
            </Link>
          </div>
        </div>
      </nav>

      <section className="section">
        <div className="auth_container">
          <div className="auth_img">
            <Image src="/image/auth-image.png" alt="Auth" width={400} height={400} />
          </div>
          <div className="auth_content">
            <form className="auth_form">
              <h2 className="form_title">Login to your account</h2>
              <p className="auth_p">Enter your details below</p>
              <div className="form_group">
                <input type="email" placeholder="Email" className="form_input" />
              </div>
              <div className="form_group form_pass">
                <input type="password" placeholder="Password" className="form_input" />
              </div>
              <div className="form_group">
                <button className="form_btn">Login</button>
              </div>
              <div className="form_group">
                <span>Don&apos;t have an account? <Link href="/signup" className="form_auth_link">Register</Link></span>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer_container">
          <div className="footer_item">
            <Link href="#" className="footer_logo">Exclusive</Link>
            <div className="footer_p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem fuga harum voluptate?
          </div>
        </div>
        <div className="footer_item">
          <h3 className="footer_item_titl">Support</h3>
          <ul className="footer_list">
            <li className="li footer_list_item">Stockholm, Sweden</li>
            <li className="li footer_list_item">email&#64;gmail.com</li>
            <li className="li footer_list_item">+46 123 456 78</li>
            <li className="li footer_list_item">+46 72 345 67</li>
          </ul>
        </div>
        <div className="footer_item">
          <h3 className="footer_item_title">Support</h3>
          <ul className="footer_list">
            <li className="li footer_list_item">Account</li>
            <li className="li footer_list_item">Login / Register</li>
            <li className="li footer_list_item">Cart</li>
            <li className="li footer_list_item">Shop</li>
          </ul>
        </div>
        <div className="footer_item">
          <h3 className="footer_item_title">Support</h3>
          <ul className="footer_list">
            <li className="li footer_list_item">Privacy policy</li>
            <li className="li footer_list_item">Terms of use</li>
            <li className="li footer_list_item">FAQ&apos;s</li>
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

      {/* Swiper JS */}
      <Script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/js/app.js" strategy="afterInteractive" />
    </>
  );
};

export default LoginPage;
