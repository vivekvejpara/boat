import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import { Product } from "../DataBase";
import { useSelector } from "react-redux";

function Blogs() {
  const cart = useSelector((state) => state.addtocart.cart);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(cart.length);
  }, [cart]);
  return (
    <>
      <NavBar cartItemCount={cartItemCount} />
      <div className="animate__animated wow animate__fadeInLeft bestSellerText 2xl:mx-5 xl:p-10 lg:mx-0 xl:text-3xl xl:mx-0 sm:text-2xl md:mx-0 sm:mx-0 sm:py-7 sm:px-10">
        <h1 className="text-3xl">
          All{" "}
          <span className="sm:text-3xl" style={{ fontWeight: "bolder" }}>
            Blo
            <span
              className="sm:text-3xl"
              style={{ borderBottom: "5px solid #D83333" }}
            >
              gs
            </span>
          </span>
        </h1>
      </div>

      <div className="flex justify-center w-full">
        <div className=" px-5 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-4 ">
          {Product?.Blog?.map((value, index) => {
            return (
              <div
                key={index}
                className="animate__animated wow animate__zoomIn border-2 rounded-lg"
              >
                <div>
                  <img
                    className=" rounded-lg h-60 sm:w-full"
                    src={value.img}
                    alt=""
                  />
                </div>
                <div className="p-3" style={{ backgroundColor: "#FAFAFA" }}>
                  <h1 className="text-lg font-bold">{value.title}...</h1>
                  <h1 className="mt-5">{value.date}</h1>
                </div>
              </div>
            );
          }).slice(4)}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
