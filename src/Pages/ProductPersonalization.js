import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import { Product } from "../DataBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductPersonalization() {
  const Navigate = useNavigate();
  const cart = useSelector((state) => state.addtocart.cart);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(cart.length);
  }, [cart]);
  return (
    <>
      <NavBar cartItemCount={cartItemCount} />
      <div className="animate__animated wow animate__fadeInLeft bestSellerText xl:p-10 lg:mx-10 xl:text-3xl xl:mx-28 sm:text-2xl md:mx-9 sm:mx-5 sm:py-7 sm:px-10">
        <h1 className="sm:text-3xl">
          Special Range —{" "}
          <span className="sm:text-3xl" style={{ fontWeight: "bolder" }}>
            Personalised Pr
            <span
              className="sm:text-3xl"
              style={{ borderBottom: "5px solid #D83333" }}
            >
              oducts
            </span>
          </span>
        </h1>
      </div>
      <div className="overflow-hidden py-3 w-full flex justify-center">
        <div className="First_cart xl:grid xl:gap-4 xl:grid-cols-4 md:grid md:gap-4 md:grid-cols-2 sm:grid sm:gap-4 sm:grid-cols-2 lg:grid lg:grid-cols-3  lg:gap-4  w-10/12">
          {Product?.AllCategoryDropDown?.filter(
            (value) => value.category === "Smart Watch"
          ).map((value, index) => {
            return (
              <div
                onClick={() => {
                  Navigate(
                    `/productPersonalization/${value.category}/${value.id}`
                  );
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
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPersonalization;
