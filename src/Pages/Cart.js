import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FormikForm from "../Component/FormikForm";

const btn = [
  { name: "1. Shopping Cart", href: "/AddToCart", color: true },
  { name: "2. CheckOut", href: "/Checkout", color: false },
  { name: "3. Order Complete", href: "/OrderCompleted", color: false },
];

export const numberShipping = Math.floor(Math.random() * 100);
export const numberFlatRate = Math.floor(Math.random() * 10);


function Cart() {
  const cart = useSelector((state) => state.addtocart.cart);
  const pricing = cart.reduce((a, b) => a + b.price, 0);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((state) => state + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount((state) => state - 1);
    }
  };
  const [countProduct, setCountProduct] = useState(0);  

  useEffect(() => {
    setCountProduct(cart.length);
  }, [cart]);
  const Navigate = useNavigate();
  return (
    <>
      <NavBar cartItemCount={countProduct}/>

      <div
        style={{ fontFamily: "Josefin Sans" }}
        className="flex justify-center w-full"
      >
        <div className="2xl:w-9/12 w-full  p-10">
          <div className="ThreeMainBtn lg:flex lg:justify-center 2xl:gap-14 sm:gap-0 sm:grid sm:grid-rows-3 ">
            {btn?.map((value, index) => {
              return (
                <button
                  className={classNames(
                    value.color
                      ? "text-orange-400"
                      : " hover:transition-all text-gray-600 hover:text-orange-400",
                    "Mainbtns 2xl:text-4xl xl:text-3xl lg:text-2xl  mt-10 sm:mt-4"
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
          <div
            style={{ fontFamily: "Josefin Sans" }}
            className="sm:mt-14 sm:px-10 py-5 "
          >
            <div className="2xl:flex 2xl:justify-between gap-10">
              <div className="2xl:w-8/12">
                <div
                  style={{ color: "gray" }}
                  className="  flex justify-between py-5 "
                >
                  <li className="lg:text-3xl sm:text-base">Product </li>
                  <ul className="flex justify-between sm:w-6/12 w-7/12 ">
                    <li className="lg:text-3xl sm:text-base text-xs">
                      {" "}
                      Price{" "}
                    </li>
                    <li className="lg:text-3xl sm:text-base text-xs">
                      {" "}
                      Quantity{" "}
                    </li>
                    <li className="lg:text-3xl sm:text-base text-xs">
                      {" "}
                      Subtotal
                    </li>
                  </ul>
                </div>
                <hr />
                <div className=" py-3">
                  {cart?.map((value, index) => {
                    return (
                      <div className="CartMainDiv" key={index}>
                        <div className="flex justify-between">
                          <div className="sm:flex sm:gap-7  items-center">
                            <img
                              className="CartImage lg:w-28 w-10 sm:w-14 mb-3 mt-3"
                              src={value.mainImage}
                              alt=""
                            />
                            <h1 className="sm:text-sm text-xs">{value.name}</h1>
                          </div>
                          <div className="flex sm:w-6/12 w-7/12  justify-between items-center   ">
                            <li className="lg:text-2xl text-xs" id="Total">
                              ₹{value.price}
                            </li>
                            <li>
                              {" "}
                              <button
                                className="lg:w-36  w-10 text-xs sm:p-1 text-gray-500 lg:py-3 lg:px-2 border-2 lg:text-xl flex justify-between items-center"
                                type="button"
                              >
                                <div onClick={handleIncrement}>
                                  <i className="fa-solid fa-plus text-xs sm:text-sm"></i>
                                </div>
                                <span>{count}</span>
                                <div onClick={handleDecrement}>
                                  <i className="fa-solid fa-minus sm:text-sm text-xs"></i>
                                </div>
                              </button>
                            </li>
                            <li className="lg:text-2xl " id="Subtotal">
                              ₹{value.price}
                            </li>
                          </div>
                        </div>
                        <hr />
                      </div>
                    );
                  })}

                  <div className="lg:pt-10 sm:pt-4 lg:pb-10 pt-5 sm:pb-5 sm:flex sm:justify-between">
                    <div>
                      <button
                        onClick={() => {
                          Navigate(`/`);
                        }}
                        className="btnHover1 p-5 sm:text-base text-xs"
                      >
                        <i className="fa-solid fa-arrow-left-long mr-2"></i>{" "}
                        CONTINUE SHOPPING
                      </button>
                    </div>
                    <div>
                      <button
                        style={{ border: "1px solid black" }}
                        className="btnHover sm:mt-0 mt-4 sm:p-5 p-3  lg:px-14  px-3 sm:text-base text-xs  "
                      >
                        UPDATE CART
                      </button>
                    </div>
                  </div>
                  <div className="pt-10 mb-10">
                    <h1 className="text-gray-700 text-xl sm:text-3xl">
                      Coupon Discount
                    </h1>
                    <div>
                      <input
                        type="text"
                        className=" sm:mt-5 p-4 sm:px-8 w-full mt-3 border-b-2"
                        placeholder="Enter coupon code here"
                      />
                    </div>
                    <button
                      style={{ border: "1px solid black" }}
                      className="btnHover sm:p-4 sm:mt-7 sm:px-14 mt-4 p-2 text-xs sm:text-base w-full"
                    >
                      APPLY COUPON
                    </button>
                  </div>
                </div>
              </div>
              <div className="2xl:w-4/12 border-4 sm:p-7 p-3">
                <div>
                  <h1 className="sm:text-3xl text-xl sm:mb-4 mb-2  text-gray-500">
                    Cart Totals
                  </h1>
                  <hr />
                </div>
                <div className="sm:my-7 my-3   ">
                  <div className="flex justify-between">
                    <h1 className="sm:text-2xl mb-2 sm:mb-4 text-gray-500">
                      Subtotal
                    </h1>
                    <h1 className="sm:text-2xl">₹{pricing}</h1>
                  </div>
                  <hr />
                </div>
                <div>
                  <h1 className="sm:text-2xl text-xl  text-gray-500">
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
                </div>
                <div className="mt-5">
                  <FormikForm />
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

export default Cart;
