import React, { useEffect, useState } from "react";
import { Product } from "../DataBase";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../AddToCart/AddToCartSlice";

function SinglePageProduct() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const handleImage = (image) => {
    setImage(image);
  };

  const handleAddToCart = () => {
    if (allProductID) {
      dispatch(addToCart(allProductID));
      console.log(allProductID); 
    }
  };
  const cart = useSelector((state) => state.addtocart.cart);

  const allProductID = Product?.AllCategoryDropDown?.find(
    (value) => value.id == parseInt(id)
  );
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(cart.length);
  }, [cart]);
  if (!allProductID) {
    return <div>Loading.............</div>;
  }
  return (
    <>
      <NavBar cartItemCount={cartItemCount} />
      <div className="p-10 flex justify-center w-full ">
        <div className="w-full lg:w-9/12 xl:w-8/12">
          <div className="my-5 flex flex-col lg:flex-row justify-between ">
            <div className="w-full lg:w-8/12 lg:pr-5">
              <img
                className="w-full lg:h-auto"
                src={image || allProductID?.img}
                alt=""
              />
            </div>
            <div className="w-full lg:w-4/12">
              <div className=" leading-10  ">
                <h1 className="lg:text-xs">
                  <i className="fa-solid fa-star text-orange-400"></i>{" "}
                  {allProductID?.rating}
                </h1>
                <h1 className="2xl:text-2xl xl:text-xl font-bold lg:text-lg">
                  {allProductID?.name}
                </h1>
                <h1 className="xl:my-2 lg:my-0 text-xs">
                  {allProductID?.disc}
                </h1>
                <h1 className="font-semibold 2xl:my-10 2xl:text-4xl xl:my-2 xl:text-2xl lg:text-lg ">
                  ₹{allProductID?.price}{" "}
                  <span className="line-through xl:text-sm sm:text-xs font-normal">
                    ₹7,990.00
                  </span>{" "}
                  <span className="xl:text-sm sm:text-xs font-medium text-green-400">
                    71% off
                  </span>
                </h1>
                <span>
                  {" "}
                  <span className="font-bold xl:text-base sm:text-sm">
                    Available colours for you :
                  </span>{" "}
                  <span className="font-semibold xl:text-base sm:text-sm">
                    {allProductID?.color}
                  </span>
                </span>
                <div
                  className="rounded-lg p-3 my-4"
                  style={{ background: "#F2F5F9" }}
                >
                  <div
                    style={{
                      borderBottom: "2px solid white",
                    }}
                    className="py-4 flex justify-between"
                  >
                    <span className="2xl:text-lg xl:text-base lg:text-sm sm:text-xs flex items-center">
                      Delivering to : <span className="font-bold"> 122008</span>
                    </span>
                    <button
                      className="px-6 py-2 rounded-lg"
                      style={{ color: "#3A5B92", border: "1px solid #3A5B92" }}
                    >
                      Change
                    </button>
                  </div>
                  <div className="py-2">
                    <span className="font-bold text-green-600 xl:text-base sm:text-xs">
                      Free Delivery
                    </span>{" "}
                    {"  "}
                    <span className="font-bold  sm:text-xs">|</span>{" "}
                    <span className="font-bold xl:text-base   sm:text-xs">
                      By Sunday, 11 Feb
                    </span>
                    <h1 className="xl:text-base sm:text-xs">
                      if ordered within{" "}
                      <span className="font-normal text-red-600">20 mins</span>{" "}
                    </h1>
                  </div>
                </div>
                <div className="my-10 ">
                  <button
                    onClick={() => {
                      handleAddToCart();
                    }}
                    className="bg-black text-white my-3 py-4 w-full text-lg rounded-xl hover:bg-gray-900"
                  >
                    Add to cart{" "}
                    <i className="fa-solid fa-angles-right mx-1 text-sm hover:"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {allProductID?.img &&
              allProductID?.img.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    className="w-full"
                    onMouseOver={() => handleImage(image)}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SinglePageProduct;
