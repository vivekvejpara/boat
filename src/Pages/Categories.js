import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import { Product } from "../DataBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Categories() {
  const Navigate = useNavigate();  
  const cart = useSelector((state) => state.addtocart.cart);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(cart.length);
  }, [cart]);
  return (
    <>
      <NavBar cartItemCount={cartItemCount} />
      <div className="animate__animated wow animate__fadeInLeft xl:p-10 lg:mx-10 xl:text-3xl xl:mx-28 sm:text-2xl md:mx-9 sm:mx-5 sm:py-7 sm:px-10 px-11 py-5">
        <h1 className="sm:text-3xl text-2xl">
          Explore All{" "}
          <span className="sm:text-3xl" style={{ fontWeight: "bolder" }}>
            Categor
            <span
              className="sm:text-3xl"
              style={{ borderBottom: "5px solid #D83333" }}
            >
              ies
            </span>
          </span>
        </h1>
      </div>
      <div className="flex justify-center w-full">
        <div className=" w-10/12  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 text-center  ">
          {Product?.CategoryDropDown?.map((value, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  Navigate(`/categories/${value.ProductName}`);
                }}
                className="animate__animated wow animate__zoomIn flex justify-center w-full"
              >
                <div className="w-full flex items-center">
                  <img className="w-32 sm:w-40" src={value.image} alt="" />
                  <h1 className=" font-bold text-sm sm:text-xl ">
                    {value.ProductName}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Categories;
