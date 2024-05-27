import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import { Product } from "../DataBase";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CorporateOrders() {
  const Navigate = useNavigate();
  const cart = useSelector((state) => state.addtocart.cart);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(cart.length);
  }, [cart]);
  return (
    <>
      <NavBar cartItemCount={cartItemCount} />
      <div className="w-full flex justify-center">
        {Product?.CorporateOrders?.map((value, index) => {
          return (
            <div
              key={index}
              className="Corporate_main xl:w-10/12 xl:grid xl:grid-cols-2 "
            >
              <div style={{ background: "#F5FAFD" }}>
                <img className="w-full" src={value.image} alt="" />
              </div>
              <div
                className="CorporateTextMain xl:p-7 xl:py-16 xl:text-left"
                style={{ background: "#F5FAFD" }}
              >
                <h1 className="CorporateTextP1 font-bold xl:text-7xl">
                  Your Bulk Orders{" "}
                </h1>
                <span className="CorporateTextP2 xl:text-7xl">
                  Are Now Hassle Free
                </span>
                <h1 className="CorporateTextP3 xl:text-5xl font-bold">
                  Got A Big boAt Order?
                </h1>
                <h1 className="CorporateTextP4 xl:text-3xl font-semibold xl:my-2">
                  Come sail with us
                </h1>
                <div className="xl:my-5">
                  <h1 className="CorporateTextP5 font-semibold xl:text-2xl ">
                    For shipments of 25 units or more,{" "}
                  </h1>
                  <h1 className="CorporateTextP6  font-bold xl:text-2xl">
                    Hit us up!
                  </h1>
                  <button className="CorporateTextBtn bg-black text-white xl:w-11/12 xl:p-3 rounded-xl xl:py-5 xl:text-2xl ">
                    Submit Your Requirement
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center w-10/11">
        <div className="todaysOfferRes sm:w-10/12 sm:py-5 flex justify-between items-center">
          <div className="animate__animated wow animate__fadeInLeft bestSellerText">
            <h1 className="sm:text-3xl">
              Get a{" "}
              <span className="sm:text-3xl" style={{ fontWeight: "bolder" }}>
                bo
                <span
                  className="sm:text-3xl"
                  style={{ borderBottom: "5px solid #D83333" }}
                >
                  AT
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
                Navigate(`/collectionsdaily-deals`);
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
                    Navigate(`/corporateOrders/${value.category}/${value.id}`);
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
            .slice(4, 8)}
        </div>
      </div>

      <div className="animate__animated wow animate__fadeInLeft bestSellerText xl:p-10 lg:mx-10 xl:text-3xl xl:mx-28 sm:text-2xl md:mx-9 sm:mx-5 sm:py-7 sm:px-10">
        <h1 className="sm:text-3xl">
          Shop by{" "}
          <span className="sm:text-3xl" style={{ fontWeight: "bolder" }}>
            Lifesty
            <span
              className="sm:text-3xl"
              style={{ borderBottom: "5px solid #D83333" }}
            >
              le
            </span>
          </span>
        </h1>
      </div>

      <div className="flex w-full justify-center">
        <div className="grid 2xl:grid-cols-5 gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {Product?.Lifestyle?.map((value, index) => {
            return (
              <div
                onClick={() => {
                  Navigate(
                    `/categories/${Product?.AllCategoryDropDown?.map(
                      (value) => value.category
                    )}/${value.id}`
                  );
                }}
                className="animate__animated wow animate__zoomIn cursor-pointer"
                key={index}
              >
                <img className="w-72" src={value.img} alt="" />
                <div className="lifestyleColor text-center py-5">
                  <h1 className="text-2xl font-bold	">{value.name}</h1>
                  <button className="btn-1 font-bold">
                    View all{" "}
                    <i className="fa-solid fa-circle-arrow-right iColor"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CorporateOrders;
