import React from "react";
import "./Footer.scss";
import SocialMedia from "../socialMedia/SocialMedia";

function Footer() {
  const clickHandler = () => {
    console.log("subscribed!");
  };
  return (
    <section className="footer">
      <div className="footer-info">
        <div className="footer-info__name">
          <span className="footer-info__name__txt">liv inspiation</span>
        </div>
        <div className="footer-info__navi">
          <ul className="footer-info__navi__menu">
            <li className="footer-info__navi__menu-list">Media</li>
            <li className="footer-info__navi__menu-list">Product</li>
            <li className="footer-info__navi__menu-list">Forum</li>
            <li className="footer-info__navi__menu-list">Event</li>
            <li className="footer-info__navi__menu-list">Write</li>
          </ul>
        </div>

        <SocialMedia boxName={"footer-info__sns"} />
      </div>

      <div className="footer-userForm">
        <div className="footer-userForm__subsc">
          <p className="footer-userForm__subsc-header">Get Updates</p>
          <p className="footer-userForm__subsc-subtitle">
            Subscribe to our newsletter to receive updates and special
            announcements.
          </p>
        </div>
        <form action="#" className="footer-userForm__form">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="footer-userForm__form-email"
            required
          />
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="First Name"
            className="footer-userForm__form-name"
            required
          />

          <button
            type="submit"
            className="footer-userForm__form-btn"
            onClick={clickHandler}
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="footer-about">
        <span className="footer-about__title">About us</span>
        <span className="footer-about__intro">
          At Lively Living Inspiration, we're your platform for sharing tips and
          ideas on healthy and vibrant living. Get inspired by others and
          inspire them in return! We're all about making your life healthier and
          happier, one idea at a time.
        </span>
        <span className="footer-about__copyright">
          © 2023 by Lively Living Inspiration. All rights reserved.
        </span>
      </div>
    </section>
  );
}

export default Footer;
