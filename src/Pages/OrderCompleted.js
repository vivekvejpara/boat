import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import "./HomePage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { numberFlatRate, numberShipping } from "./Cart";

const btn = [
  { name: "1. Shopping Cart", href: "", color: false },
  { name: "2. CheckOut", href: "/Checkout", color: false },
  { name: "3. Order Complete", href: "/OrderCompleted", color: true },
];

function OrderCompleted() {
  const numberRandom = Math.floor(Math.random() * 3657);

  console.log(numberRandom, "number");
  const cart = useSelector((state) => state.addtocart.cart);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const payment = queryParams.get("PaymentMethod");
  let flatRate = 5.0;
  let Shipping = 100.0;
  const pricing = cart.reduce((a, b) => a + b.price, 0);
  const pricingRate = cart.reduce(
    (a, b) => a + b.price + flatRate + Shipping,
    0
  );
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const Navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(cart.length);
  }, [cart]);
  return (
    <>
      <NavBar cartItemCount={cartItemCount} />
      <div
        style={{ fontFamily: "Josefin Sans" }}
        className="flex justify-center w-full"
      >
        <div className="ThreeMainBtnDiv w-9/12  sm:p-10">
          <div className="ThreeMainBtn lg:flex lg:justify-center 2xl:gap-14 sm:gap-0 sm:grid sm:grid-rows-3 ">
            {btn?.map((value, index) => {
              return (
                <button
                  className={classNames(
                    value.color
                      ? "text-orange-400"
                      : " hover:transition-all text-gray-600 hover:text-orange-400",
                    "Mainbtns 2xl:text-4xl xl:text-3xl lg:text-2xl md: text-2xl mt-10 sm:mt-4"
                  )}
                  key={index}
                  onClick={() => {
                    Navigate(`/AddToCart${value.href}`);
                  }}
                >
                  {value.name}{" "}
                  <i className="fa-solid fa-chevron-right arrow sm:mx-5 sm:text-base text-black"></i>
                </button>
              );
            })}
          </div>
          <div className="flex justify-center">
            <div
              style={{ border: "1px solid #ffd7a8" }}
              className="OrderReceive 2xl:w-10/12 xl:w-11/12 sm:w-full lg:py-12 sm:py-5  flex  justify-center  items-center lg:mt-16 sm:mt-10"
            >
              <i className="fa-regular fa-circle-check checkFont lg:text-5xl  sm:text-2xl text-orange-300"></i>
              <span className="OrderReceivedText sm:ml-2 mt-2 xl:text-3xl md:text-2xl text-gray-600">
                Thank you. Your Order has been received.
              </span>
            </div>
          </div>
          <div className="OrderStatus flex justify-center lg:my-10 sm:my-3">
            <div className="OrderStatusGrid lg:p-5 sm:p-3 text-gray-600 lg:w-10/12 lg:flex lg:justify-between sm:grid sm:grid-rows-6 sm:gap-5 text-center">
              <div className="mb-2">
                <h1>ORDER NUMBER</h1>
                <h1 className="lg:text-xl ">{numberRandom}</h1>
              </div>
              <div className="lg:border-r-2 sm:hidden"></div>
              <div>
                <h1>STATUS</h1>
                <h1 className="lg:text-xl ">Processing</h1>
              </div>
              <div className="lg:border-r-2 sm:hidden"></div>
              <div>
                <h1>DATE</h1>
                <h1 className="lg:text-xl">Feb 28</h1>
              </div>
              <div className="lg:border-r-2 sm:hidden"></div>
              <div>
                <h1>EMAIL:</h1>
                <h1 className="lg:text-xl">{email}</h1>
              </div>
              <div className="lg:border-r-2 sm:hidden"></div>
              <div>
                <h1>TOTAL:</h1>
                <h1 className="lg:text-xl">₹{pricingRate}</h1>
              </div>
              <div className="lg:border-r-2 sm:hidden"></div>
              <div>
                <h1>PAYMENT METHOD:</h1>
                <h1 className="lg:text-xl">{payment}</h1>
              </div>
            </div>
          </div>
          <div className="OrderSummary flex justify-center  lg:mt-20 sm:mt-10 text-gray-500">
            <div className="lg:w-10/12 sm:w-full">
              <h1 className="OrderSummarytext lg:text-3xl sm:text-2xl">
                Order Details
              </h1>
              <div className="OrderSummaryMain lg:p-5 sm:p-3 lg:px-10 sm:px-5  border-2 mt-5">
                <div>
                  <h1 className="lg:text-3xl sm:text-2xl sm:my-5">
                    Your Order
                  </h1>
                  <hr />
                </div>
                <div className="OrderSummaryProducts sm:my-7">
                  <h1 className="lg:text-2xl sm:text-xl lg:mb-4 sm:mb-4 text-gray-500">
                    Product
                  </h1>
                  {cart.map((value) => {
                    return (
                      <div className="flex justify-between my-2">
                        <h1 className="lg:text-lg sm:text-base">
                          {value.name}
                        </h1>
                        <h1 className="lg:text-xl sm:text-base">
                          ₹{value.price}
                        </h1>
                      </div>
                    );
                  })}
                  <hr />
                </div>
                <div className="subTotal sm:my-7   ">
                  <div className="flex justify-between">
                    <h1 className="lg:text-2xl sm:text-xl mb-4 text-gray-500">
                      Subtotal
                    </h1>
                    <h1 className="lg:text-2xl sm:text-xl">₹{pricing}</h1>
                  </div>
                  <hr />
                </div>
                <div className="leading-19">
                  <h1 className="sm:text-2xl  text-gray-500">
                    Calculated Shipping
                  </h1>

                  <div className="flex justify-between my-2">
                    <h1 className="sm:text-lg">Shipping Charges</h1>
                    <h1 className="sm:text-xl">₹{numberShipping}.00</h1>
                  </div>
                  <div className="flex justify-between my-2">
                    <h1 className="sm:text-lg"> Flat rate</h1>
                    <h1 className="sm:text-xl">₹{numberFlatRate}.00</h1>
                  </div>

                  <hr />
                </div>
                <div className="PaymentM sm:my-7   ">
                  <div className="PaymentMain sm:flex sm:justify-between">
                    <h1 className="lg:text-2xl sm:text-xl sm:mb-4 text-gray-500">
                      Payment method:
                    </h1>
                    <h1 className="lg:text-xl sm:text-lg">{payment}</h1>
                  </div>
                  <hr />
                </div>

                <div className="subTotal sm:my-7   ">
                  <div className="flex justify-between">
                    <h1 className="sm:text-2xl sm:mb-4 text-gray-500">
                      Total{" "}
                      <span className="text-xs sm:text-sm">
                        (including All Charges){" "}
                      </span>
                      :
                    </h1>
                    <h1 className="sm:text-xl">₹{pricingRate}</h1>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrderCompleted;