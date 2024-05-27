import React from "react";
import BoatLogoBlack from "../Asset/Boat-logo-black.svg";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="Footer sm:p-10 sm:m-10 ">
        <div className="Footer_row grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2">
          <div className=" FooterLogoPart">
            <div className="logo">
              <img className="Logo_Width" src={BoatLogoBlack} alt="" />
            </div>
            <h1 className="h1_logo_text font-semibold sm:my-4 sm:text-2xl">
              Subscribe to our email alerts!
            </h1>
            <div>
              <input
                className="p-2 w-10/12 rounded-md"
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              <button className="p-2 py-2 rounded-md bg-white">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="FooterRelative leading-7">
            <li className="li font-bold text-lg">Shop</li>
            <ul className="FooterAbsolute">
              <li>True Wireless Earbuds</li>
              <li>Wired Headphones</li>
              <li>Home Audio</li>
              <li>Smart Watch</li>
              <li>Misfit Trimmers</li>
              <li>Wireless Headphones</li>
              <li>Wireless Speakers</li>
              <li>Mobile Accessories</li>
              <li>TRebel</li>
              <li>Earn ₹100</li>
            </ul>
          </div>
          <div className="FooterRelative leading-7">
            <li className="li font-bold text-lg">Help</li>
            <ul className="FooterAbsolute">
              <li>Track Your Order</li>
              <li>Warranty & Support</li>
              <li>Return Policy</li>
              <li>Service Centers</li>
              <li>Bulk Orders</li>
              <li>FAQs</li>
              <li>Why Buy Direct</li>
            </ul>
          </div>
          <div className="FooterRelative leading-7">
            <li className="li font-bold text-lg">Company </li>
            <ul className="FooterAbsolute">
              <li> About boAt </li>
              <li> News </li>
              <li>Read Our Blog</li>
              <li>Careers</li>
              <li>Security</li>
              <li>Investor Relations</li>
              <li>Social Responsibility</li>
              <li>Warranty Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
