import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import { Product } from "../DataBase";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Warrenty from "../Asset/Warranty_img.svg";
import Billing from "../Asset/Billing_img.svg";
import Shipping from "../Asset/Shipping_img.svg";
import Replacement from "../Asset/Replacement_img.svg";
import { useSelector } from "react-redux";

function GiftwithBoat() {
  const Navigate = useNavigate();
  const cart = useSelector((state) => state.addtocart.cart);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(cart.length);
  }, [cart]);
  
  return (
    <>
      <NavBar cartItemCount={cartItemCount} />

      <div className="h-full w-full">
        {Product?.GiftWithBoatBanner?.map((value, index) => {
          return (
            <div key={index} className="h-full w-full">
              <img src={value.image} alt="" className="h-full w-full" />
            </div>
          );
        }).slice(2, 3)}
      </div>

      <div className="flex justify-center w-10/11">
        <div className="todaysOfferRes sm:w-10/12 sm:py-5 flex justify-between items-center">
          <div className="animate__animated wow animate__fadeInLeft bestSellerText">
            <h1 className="sm:text-3xl">
              For{" "}
              <span className="sm:text-3xl" style={{ fontWeight: "bolder" }}>
                Special
              </span>{" "}
              <span className=" sm:text-3xl">
                Da
                <span
                  className=" sm:text-3xl"
                  style={{ borderBottom: "5px solid #D83333" }}
                >
                  ys
                </span>
              </span>
            </h1>
          </div>
          <div
            style={{ color: "#2F5B96" }}
            className="animate__animated wow animate__fadeInRight"
          >
            <button
              onClick={() => {
                Navigate(`/giftWithBoat/collectionsdaily-deals`);
              }}
              className="todaysOfferResBtn font-bold"
            >
              View all{" "}
              <i className="fa-solid fa-circle-arrow-right sm:mx-1"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden py-3 w-full flex justify-center">
        <div className="First_cart xl:grid xl:gap-4 xl:grid-cols-4 md:grid md:gap-4 md:grid-cols-2 sm:grid sm:gap-4 sm:grid-cols-2 lg:grid lg:grid-cols-3  lg:gap-4  w-10/12">
          {Product?.AllCategoryDropDown?.filter(
            (value) => value.category === "Neckbands"
          )
            .map((value, index) => {
              return (
                <div
                  onClick={() => {
                    Navigate(`/categories/${value.category}/${value.id}`);
                  }}
                  key={index}
                  className="First_cart_Row animate__animated wow animate__zoomIn cart  rounded-xl  xl:w-full lg:w-full"
                >
                  <div>
                    <img
                      className="  w-full rounded-xl "
                      src={value.img[0]}
                      alt=""
                    />
                  </div>
                  <hr />
                  <div className="main_cart sm:px-6 sm:py-3 ">
                    <div className="First_cart_Row_Temp sm:flex sm:justify-between w-full text-sm">
                      <h1 className="First_cart_Text_Name font-semibold font-sans cursor-pointer  sm:text-lg">
                        {value.name}
                      </h1>
                      <h1 className="First_cart_Text_Color sm:text-lg">
                        {value.color}
                      </h1>
                    </div>
                    <div className="First_cart_Row_Temp sm:flex sm:justify-between align-middle">
                      <div>
                        <h1 className="First_cart_Text_Price font-bold  md:text-xl  sm:text-2xl ">
                          ${value.price}
                        </h1>
                        <h1 className="First_cart_Text_Rating sm:text-sm flex gap-1">
                          <i className="fa-solid fa-star text-orange-400 text-sm"></i>
                          {value.rating}
                        </h1>
                      </div>
                      <div>
                        <button className="btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
            .slice(0, 4)}
        </div>
      </div>

      <div className="gift_main xl:w-10/12 xl:p-5 grid xl:grid-cols-2 gap-4 sm:w-full sm:px-10 sm:py-4">
        {Product?.GiftWithBoatBanner?.map((value, index) => {
          return (
            <div key={index}>
              <img className="w-full" src={value.image} alt="" />
            </div>
          );
        }).slice(0, 2)}
      </div>
      <div className="flex justify-center w-10/11">
        <div className="todaysOfferRes sm:w-10/12 sm:py-5 flex justify-between items-center">
          <div className="animate__animated wow animate__fadeInLeft bestSellerText">
            <h1 className="sm:text-3xl text-sm">
              For Friends &{" "}
              <span className="sm:text-3xl" style={{ fontWeight: "bolder" }}>
                Fam
                <span
                  className=" sm:text-3xl"
                  style={{ borderBottom: "5px solid #D83333" }}
                >
                  ily
                </span>
              </span>{" "}
            </h1>
          </div>
          <div
            style={{ color: "#2F5B96" }}
            className="animate__animated wow animate__fadeInRight"
          >
            <button
              onClick={() => {
                Navigate(`/giftWithBoat/collectionsdaily-deals`);
              }}
              className="todaysOfferResBtn font-bold"
            >
              View all{" "}
              <i className="fa-solid fa-circle-arrow-right sm:mx-1"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-hidden py-3 w-full flex justify-center">
        <div className="First_cart xl:grid xl:gap-4 xl:grid-cols-4 md:grid md:gap-4 md:grid-cols-2 sm:grid sm:gap-4 sm:grid-cols-2 lg:grid lg:grid-cols-3  lg:gap-4  w-10/12">
          {Product?.AllCategoryDropDown?.filter(
            (value) => value.category === "True Wireless Earbuds"
          )
            .map((value, index) => {
              return (
                <div
                  onClick={() => {
                    Navigate(`/categories/${value.category}/${value.id}`);
                  }}
                  key={index}
                  className="First_cart_Row animate__animated wow animate__zoomIn cart  rounded-xl  xl:w-full lg:w-full"
                >
                  <div>
                    <img
                      className="  w-full rounded-xl "
                      src={value.img[0]}
                      alt=""
                    />
                  </div>
                  <hr />
                  <div className="main_cart sm:px-6 sm:py-3 ">
                    <div className="First_cart_Row_Temp sm:flex sm:justify-between w-full text-sm">
                      <h1 className="First_cart_Text_Name font-semibold font-sans cursor-pointer  sm:text-lg">
                        {value.name}
                      </h1>
                      <h1 className="First_cart_Text_Color sm:text-lg">
                        {value.color}
                      </h1>
                    </div>
                    <div className="First_cart_Row_Temp sm:flex sm:justify-between align-middle">
                      <div>
                        <h1 className="First_cart_Text_Price font-bold  md:text-xl  sm:text-2xl ">
                          ${value.price}
                        </h1>
                        <h1 className="First_cart_Text_Rating sm:text-sm flex gap-1">
                          <i className="fa-solid fa-star text-orange-400 text-sm"></i>
                          {value.rating}
                        </h1>
                      </div>
                      <div>
                        <button className="btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
            .slice(0, 4)}
        </div>
      </div>

      <div className="WarrantyCart w-full flex justify-center sm:py-10">
        <div className="ShopByCategory 2xl:w-7/12 grid sm:grid-cols-4 gap-4 xl:w-8/12">
          <div className="animate__animated wow animate__fadeInLeft">
            <div className="flex justify-center ">
              <img className=" 2xl:w-32 xl:w-28" src={Warrenty} alt="" />
            </div>
            <div className="2xl:text-xl flex justify-center xl:text-lg sm:text-sm ">
              <h1>
                Made By{" "}
                <span className="ShopByCategoryText font-bold	">Indians</span>
              </h1>
            </div>
          </div>
          <div className="animate__animated wow animate__fadeInLeft">
            <div className="flex justify-center ">
              <img className="2xl:w-32 xl:w-28" src={Replacement} alt="" />
            </div>
            <div className="2xl:text-xl flex justify-center xl:text-lg sm:text-sm">
              <h1>
                Exciting{" "}
                <span className="ShopByCategoryText font-bold	">Offers</span>
              </h1>
            </div>
          </div>
          <div className="animate__animated wow animate__fadeInRight">
            <div className="flex justify-center ">
              <img className=" 2xl:w-32 xl:w-28" src={Shipping} alt="" />
            </div>
            <div className="2xl:text-xl flex justify-center xl:text-lg sm:text-sm">
              <h1>
                Fast{" "}
                <span className="ShopByCategoryText font-bold	">Delivery</span>
              </h1>
            </div>
          </div>
          <div className="animate__animated wow animate__fadeInRight">
            <div className="flex justify-center ">
              <img className=" 2xl:w-32 xl:w-28" src={Billing} alt="" />
            </div>
            <div className="2xl:text-xl flex justify-center xl:text-lg sm:text-sm">
              <h1>
                Exclusive{" "}
                <span className="ShopByCategoryText  font-bold	">Benefits</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-10/11">
        <div className="todaysOfferRes sm:w-10/12 sm:py-5 flex justify-between items-center">
          <div className="animate__animated wow animate__fadeInLeft bestSellerText">
            <h1 className="sm:text-3xl">
              By{" "}
              <span className="sm:text-3xl" style={{ fontWeight: "bolder" }}>
                Pass
                <span
                  className=" sm:text-3xl"
                  style={{ borderBottom: "5px solid #D83333" }}
                >
                  ion
                </span>
              </span>{" "}
            </h1>
          </div>
          <div
            style={{ color: "#2F5B96" }}
            className="animate__animated wow animate__fadeInRight"
          >
            <button
              onClick={() => {
                Navigate(`/giftWithBoat/collectionsdaily-deals`);
              }}
              className="todaysOfferResBtn font-bold"
            >
              View all{" "}
              <i className="fa-solid fa-circle-arrow-right sm:mx-1"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden py-3 w-full flex justify-center">
        <div className="First_cart xl:grid xl:gap-4 xl:grid-cols-4 md:grid md:gap-4 md:grid-cols-2 sm:grid sm:gap-4 sm:grid-cols-2 lg:grid lg:grid-cols-3  lg:gap-4  w-10/12">
          {Product?.AllCategoryDropDown?.map((value, index) => {
            return (
              <div
                onClick={() => {
                  Navigate(`/categories/${value.category}/${value.id}`);
                }}
                key={index}
                className="First_cart_Row animate__animated wow animate__zoomIn cart  rounded-xl  xl:w-full lg:w-full"
              >
                <div>
                  <img
                    className="  w-full rounded-xl "
                    src={value.img[0]}
                    alt=""
                  />
                </div>
                <hr />
                <div className="main_cart sm:px-6 sm:py-3 ">
                  <div className="First_cart_Row_Temp sm:flex sm:justify-between w-full text-sm">
                    <h1 className="First_cart_Text_Name font-semibold font-sans cursor-pointer  sm:text-lg">
                      {value.name}
                    </h1>
                    <h1 className="First_cart_Text_Color sm:text-lg">
                      {value.color}
                    </h1>
                  </div>
                  <div className="First_cart_Row_Temp sm:flex sm:justify-between align-middle">
                    <div>
                      <h1 className="First_cart_Text_Price font-bold  md:text-xl  sm:text-2xl ">
                        ${value.price}
                      </h1>
                      <h1 className="First_cart_Text_Rating sm:text-sm flex gap-1">
                        <i className="fa-solid fa-star text-orange-400 text-sm"></i>
                        {value.rating}
                      </h1>
                    </div>
                    <div>
                      <button className="btn">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }).slice(12, 16)}
        </div>
      </div>

      <div className="gift_main xl:w-10/12 xl:p-5 grid xl:grid-cols-2 gap-4 sm:w-full sm:px-10 sm:py-4">
        {Product?.GiftWithBoatBanner?.map((value, index) => {
          return (
            <div key={index}>
              <img className="w-full" src={value.image} alt="" />
            </div>
          );
        }).slice(3)}
      </div>
      <Footer />
    </>
  );
}

export default GiftwithBoat;
