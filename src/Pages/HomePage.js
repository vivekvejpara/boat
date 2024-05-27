import NavBar from "../Component/NavBar";
import Warrenty from "../Asset/Warranty_img.svg";
import Billing from "../Asset/Billing_img.svg";
import Shipping from "../Asset/Shipping_img.svg";
import Press from "../Asset/Press_img.avif";
import Replacement from "../Asset/Replacement_img.svg";
import { Product } from "../DataBase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./HomePage.css";
import Footer from "../Component/Footer";
import "animate.css";
import WOW from "wowjs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function HomePage() {
  const Navigate = useNavigate();

  const cart = useSelector((state) => state.addtocart.cart);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(cart.length);
  }, [cart]);

  const slider = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const [slidesToShow, setSlidesToShow] = useState(10);

  const sliderCategory = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1440) {
      setSlidesToShow(8);
    } else if (screenWidth >= 1024) {
      setSlidesToShow(6);
    } else if (screenWidth >= 768) {
      setSlidesToShow(4);
    } else if (screenWidth >= 640) {
      setSlidesToShow(3);
    } else if (screenWidth > 320) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(2); // Adjust this value for screens smaller than 320px
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      <NavBar cartItemCount={cartItemCount} />

      {/* Banner Slider */}
      <Slider {...slider}>
        {Product?.Banner?.map((value, index) => {
          return (
            <div className="main_img  slick slider-div " key={index}>
              <img
                className="img w-full h-full md:w-full md:h-full 2xl:w-full "
                src={value.Image}
                alt=""
              />
            </div>
          );
        })}
      </Slider>

      {/* BestSeller Text*/}
      <div className="animate__animated wow animate__fadeInLeft bestSellerText xl:p-10 lg:mx-10 xl:text-3xl xl:mx-28 sm:text-2xl md:mx-9 sm:mx-5 sm:py-7 sm:px-10">
        <h1 className="sm:text-3xl">
          Explore{" "}
          <span className="sm:text-3xl" style={{ fontWeight: "bolder" }}>
            Bestselle
            <span
              className="sm:text-3xl"
              style={{ borderBottom: "5px solid #D83333" }}
            >
              rs
            </span>
          </span>
        </h1>
      </div>

      {/* BestSeller Products */}
      <div className="flex justify-center w-full py-4">
        <div className="bestSellers w-10/12 grid gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
          {Product?.BestSeller?.map((value, index) => {
            return (
              <div
                onClick={() => {
                  Navigate(`/categories/${value.categoryName}`);
                }}
                className="animate__animated wow animate__zoomIn"
                key={index}
              >
                <div className="">
                  <video
                    className="py-5 rounded-lg"
                    preload="none"
                    loop={true}
                    autoPlay={true}
                    playsInline={true}
                    muted={true}
                    mediatype="video"
                    dataindex="Infinity"
                    jsonkey="LQpQ74Z2fP"
                    issafari="false"
                    style={{
                      borderRadius: "10px",
                      objectFit: "cover",
                      objectPosition: "center top",
                      zIndex: "1",
                      border: "0px solid rgb(255, 255, 255)",
                      width: "100%",
                      height: "100%",
                    }}
                    src={value.video}
                  ></video>
                </div>
                <h1 className="bestSellersTextName text-center font-bold text-lg ">
                  {value.categoryName}
                </h1>
              </div>
            );
          })}
        </div>
      </div>

      {/* Todays Offer Text */}
      <div className="flex justify-center w-10/11">
        <div className="todaysOfferRes sm:w-10/12 sm:py-5 flex justify-between items-center">
          <div className="animate__animated wow animate__fadeInLeft bestSellerText">
            <h1 className="sm:text-3xl">
              Today's{" "}
              <span className="sm:text-3xl" style={{ fontWeight: "bolder" }}>
                Offe
                <span
                  className="sm:text-3xl"
                  style={{ borderBottom: "5px solid #D83333" }}
                >
                  rs
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

      {/* Todays Offer Product */}
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
                        ₹{value.price}
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
          }).slice(8, 12)}
        </div>
      </div>

      {/* All Categorys Text*/}
      <div className="animate__animated wow animate__fadeInLeft bestSellerText xl:p-10 lg:mx-10 xl:text-3xl xl:mx-28 sm:text-2xl md:mx-9 sm:mx-5 sm:py-7 sm:px-10">
        <h1 className="sm:text-3xl">
          Shop by{" "}
          <span className="sm:text-3xl" style={{ fontWeight: "bolder" }}>
            Categori
            <span
              className="sm:text-3xl"
              style={{ borderBottom: "5px solid #D83333" }}
            >
              es
            </span>
          </span>
        </h1>
      </div>

      {/* All Categorys  */}
      <div className="flex w-full justify-center">
        <div className="ShopByCategory w-10/12">
          <Slider {...sliderCategory}>
            {Product?.CategoryDropDown?.map((value, index) => (
              <div
                key={index}
                onClick={() => Navigate(`/categories/${value.ProductName}`)}
                className="animate__animated wow animate__zoomIn text-center"
              >
                <div className="">
                  <div className="ShopByCategoryImage flex justify-center">
                    <img src={value.image} alt="" />
                  </div>
                  <span className="ShopByCategoryText font-bold text-base">
                    {value.ProductName}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* New Launches Text */}
      <div className="flex justify-center w-10/11">
        <div className="todaysOfferRes sm:w-10/12 sm:py-5 flex justify-between items-center">
          <div className="animate__animated wow animate__fadeInLeft bestSellerText">
            <h1 className="sm:text-3xl">
              New{" "}
              <span className="sm:text-3xl" style={{ fontWeight: "bolder" }}>
                Launch
                <span
                  className="sm:text-3xl"
                  style={{ borderBottom: "5px solid #D83333" }}
                >
                  es
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

      {/* New Launches Products */}
      <div className=" w-full flex justify-center">
        <div className="First_cart xl:grid xl:gap-4 xl:grid-cols-4 md:grid md:gap-4 md:grid-cols-2 sm:grid sm:gap-4 sm:grid-cols-1 lg:grid lg:grid-cols-3  lg:gap-4  w-10/12">
          {Product?.AllCategoryDropDown?.filter(
            (value) => value.category === "True Wireless Earbuds"
          )
            .map((value, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    Navigate(`/categories/${value.category}/${value.id}`);
                  }}
                  className="animate__animated wow animate__zoomIn First_cart_Row cart  rounded-xl  xl:w-full lg:w-full"
                >
                  <img
                    className="  w-full rounded-xl "
                    src={value.img[0]}
                    alt=""
                  />
                  <hr />
                  <div className="main_cart sm:px-6 sm:py-3 ">
                    <div className="First_cart_Row_Temp sm:flex sm:justify-between w-full sm:text-sm">
                      <h1 className="First_cart_Text_Name font-semibold font-sans cursor-pointer  sm:text-lg">
                        {value.name}
                      </h1>
                      <h1 className="First_cart_Text_Color sm:text-lg">
                        {value.color}
                      </h1>
                    </div>
                    <div className="First_cart_Row_Temp sm:flex sm:justify-between sm:align-middle">
                      <div>
                        <h1 className="First_cart_Text_Price font-bold  md:text-xl  sm:text-2xl ">
                          ₹{value.price}
                        </h1>
                        <h1 className="First_cart_Text_Rating sm:text-sm sm:flex gap-1">
                          <i className="fa-solid fa-star text-orange-400 text-sm"></i>
                          {value.rating}
                        </h1>
                      </div>
                      <div>
                        <button className="btn  ">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
            .slice(4, 8)}
        </div>
      </div>

      {/* Warranty, Replacement, Shipping, Billing */}
      <div className="WarrantyCart w-full flex justify-center sm:py-10">
        <div className="ShopByCategory 2xl:w-7/12 grid sm:grid-cols-4 gap-4 xl:w-8/12">
          <div className="animate__animated wow animate__fadeInLeft">
            <div className="flex justify-center ">
              <img className=" 2xl:w-32 xl:w-28" src={Warrenty} alt="" />
            </div>
            <div className="2xl:text-xl flex justify-center xl:text-lg sm:text-sm ">
              <h1>
                1 year{" "}
                <span className="ShopByCategoryText font-bold	">Warranty</span>
              </h1>
            </div>
          </div>
          <div className="animate__animated wow animate__fadeInLeft">
            <div className="flex justify-center ">
              <img className="2xl:w-32 xl:w-28" src={Replacement} alt="" />
            </div>
            <div className="2xl:text-xl flex justify-center xl:text-lg sm:text-sm">
              <h1>
                7 Days{" "}
                <span className="ShopByCategoryText font-bold	">
                  Replacement
                </span>
              </h1>
            </div>
          </div>
          <div className="animate__animated wow animate__fadeInRight">
            <div className="flex justify-center ">
              <img className=" 2xl:w-32 xl:w-28" src={Shipping} alt="" />
            </div>
            <div className="2xl:text-xl flex justify-center xl:text-lg sm:text-sm">
              <h1>
                Free{" "}
                <span className="ShopByCategoryText font-bold	">Shipping</span>
              </h1>
            </div>
          </div>
          <div className="animate__animated wow animate__fadeInRight">
            <div className="flex justify-center ">
              <img className=" 2xl:w-32 xl:w-28" src={Billing} alt="" />
            </div>
            <div className="2xl:text-xl flex justify-center xl:text-lg sm:text-sm">
              <h1>
                BST{" "}
                <span className="ShopByCategoryText  font-bold	">Billing</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Shop by LifeStyle text*/}
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

      {/* Shop by LifeStyle Products */}
      <div className="flex w-full justify-center">
        <div className="w-10/12 grid 2xl:grid-cols-5 gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
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
                <img className="w-full" src={value.img} alt="" />
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

      {/*Best of boAT text*/}
      <div className="flex justify-center w-10/11">
        <div className="todaysOfferRes sm:w-10/12 sm:py-5 flex justify-between items-center">
          <div className="animate__animated wow animate__fadeInLeft bestSellerText">
            <h1 className="sm:text-3xl">
              Best of{" "}
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

      {/* Best of boAT Products */}
      <div className=" w-full flex justify-center py-7">
        <div className="First_cart grid xl:gap-4 xl:grid-cols-4 gap-4 md:grid-cols-2  sm:grid-cols-1  lg:grid-cols-3   w-10/12">
          {Product?.AllCategoryDropDown?.map((value, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  Navigate(`/categories/${value.category}/${value.id}`);
                }}
                className="animate__animated wow animate__zoomIn First_cart_Row cart  rounded-xl  xl:w-full lg:w-full"
              >
                <img
                  className="  w-full rounded-xl "
                  src={value.img[0]}
                  alt=""
                />
                <hr />
                <div className=" main_cart sm:px-6 sm:py-3 ">
                  <div className="First_cart_Row_Temp sm:flex sm:justify-between w-full sm:text-sm">
                    <h1 className="First_cart_Text_Name font-semibold font-sans cursor-pointer  sm:text-lg">
                      {value.name}
                    </h1>
                    <h1 className="First_cart_Text_Color sm:text-lg">
                      {value.color}
                    </h1>
                  </div>
                  <div className="First_cart_Row_Temp sm:flex sm:justify-between sm:align-middle">
                    <div>
                      <h1 className="First_cart_Text_Price font-bold  md:text-xl  sm:text-2xl ">
                        ₹{value.price}
                      </h1>
                      <h1 className="First_cart_Text_Rating sm:text-sm flex gap-1">
                        <i className="fa-solid fa-star text-orange-400 text-sm"></i>
                        {value.rating}
                      </h1>
                    </div>
                    <div>
                      <button className="btn  ">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }).slice(58, 62)}
        </div>
      </div>

      {/* Join the Tribe text */}
      <div className="animate__animated wow animate__fadeInLeft bestSellerText xl:p-10 lg:mx-10 xl:text-3xl xl:mx-28 sm:text-2xl md:mx-9 sm:mx-5 sm:py-7 sm:px-10">
        <h1 className="sm:text-3xl">
          Join the{" "}
          <span className="sm:text-3xl" style={{ fontWeight: "bolder" }}>
            Tri
            <span
              className="sm:text-3xl"
              style={{ borderBottom: "5px solid #D83333" }}
            >
              be
            </span>
          </span>
        </h1>
      </div>

      {/*  Join the Tribe Products */}
      <div className="flex justify-center w-full">
        <div className="bestSellers w-10/12 grid gap-4 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {Product?.Tribe?.map((value, index) => {
            return (
              <div
                className="animate__animated wow animate__zoomIn"
                key={index}
              >
                <div className=" ">
                  <video
                    preload="none"
                    loop={true}
                    autoPlay={true}
                    playsInline={true}
                    muted={true}
                    mediatype="video"
                    dataindex="Infinity"
                    jsonkey="LQpQ74Z2fP"
                    issafari="false"
                    style={{
                      borderRadius: "10px",
                      objectFit: "cover",
                      objectPosition: "center top",
                      zIndex: "1",
                      border: "0px solid rgb(255, 255, 255)",
                      width: "100%",
                      height: "100%",
                    }}
                    src={value.video}
                  ></video>
                </div>
                <div className="Tribe_padding sm:p-4 border-2 text-center">
                  <h1 className="Tribe_name sm:my-2 sm:text-base font-bold">
                    {value.name}
                  </h1>
                  <h1 className="Tribe_Price font-bold sm:text-lg">
                    ₹{value.price}{" "}
                    <span className="lastPriceColor line-through sm:text-sm font-normal">
                      ₹{value.lastPrice}
                    </span>{" "}
                    <span className="offColor sm:text-base font-normal">
                      {value.off}{" "}
                    </span>
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Blogs Text */}
      <div className="flex justify-center w-10/11">
        <div className="todaysOfferRes sm:w-10/12 sm:py-5 flex justify-between items-center">
          <div className="animate__animated wow animate__fadeInLeft bestSellerText">
            <span className="sm:text-3xl" style={{ fontWeight: "bolder" }}>
              Blog
              <span
                className="sm:text-3xl"
                style={{ borderBottom: "5px solid #D83333" }}
              >
                s
              </span>
            </span>
          </div>
          <div
            style={{ color: "#2F5B96" }}
            className="animate__animated wow animate__fadeInRight"
          >
            <button
              onClick={() => {
                Navigate(`/blogs`);
              }}
              className="todaysOfferResBtn font-bold"
            >
              View all{" "}
              <i className="fa-solid fa-circle-arrow-right sm:mx-1"></i>
            </button>
          </div>
        </div>
      </div>

      {/* blogs  */}
      <div className="flex justify-center w-full">
        <div
          className="w-10/12 grid 2xl:grid-cols-4 
        lg:grid-cols-3 sm:grid-cols-2 gap-4 "
        >
          {Product?.Blog?.map((value, index) => {
            return (
              <div
                key={index}
                className="animate__animated wow animate__zoomIn border-2"
              >
                <div>
                  <img className="sm:w-full" src={value.img} alt="" />
                </div>
                <div className="" style={{ backgroundColor: "#FAFAFA" }}>
                  <div className="p-3">
                    <h1>{value.date}</h1>
                    <h1 className="text-xl font-bold">{value.title}...</h1>
                    <h1 className="text-sm">{value.disc}</h1>
                    <button className="  w-full xl:px-20 rounded-3xl my-3 border-2 sm:p-4 sm:px-20">
                      Read More{" "}
                      <i className="fa-solid fa-circle-arrow-right mx-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          }).slice(0, 4)}
        </div>
      </div>

      {/* In The Press text */}
      <div className="animate__animated wow animate__fadeInLeft bestSellerText xl:p-10 lg:mx-10 xl:text-3xl xl:mx-28 sm:text-2xl md:mx-9 sm:mx-5 sm:py-7 sm:px-10">
        <h1 className="sm:text-3xl">
          In the{" "}
          <span className="sm:text-3xl" style={{ fontWeight: "bolder" }}>
            Pre
            <span
              className="sm:text-3xl"
              style={{ borderBottom: "5px solid #D83333" }}
            >
              ss
            </span>
          </span>
        </h1>
      </div>

      {/* In The Press */}
      <div className="flex justify-center w-full ">
        <div className="w-10/12 grid xl:grid-cols-2 ">
          <div className="animate__animated wow animate__fadeInLeft PressCart w-full bg-gray-300 sm:p-10 sm:py-28 flex justify-center">
            <img className="PressCartImg" src={Press} alt="" />
          </div>
          <div className="animate__animated wow animate__fadeInRight PressCartMainText w-full bg-slate-100 sm:p-10 sm:py-14 text-center">
            <h1>
              <i className="PressCartMainTextAwesome fa-solid fa-quote-left sm:text-7xl text-gray-500"></i>{" "}
            </h1>
            <h1 className="PressCartMainTextContent sm:text-3xl text-gray-400 ">
              boAt is the first company from the consumer lifestyle electronics
              industry to collaborate with the ICEA to bring out the Indigenous
              IP.
            </h1>
            <div className="flex gap-4 justify-center">
              <button className="PressCartMainTextBtn sm:p-2 sm:px-4 bg-gray-300 rounded-full hover:bg-slate-400">
                <i className="fa-solid fa-chevron-left text-zinc-500 hover:text-zinc-950"></i>
              </button>
              <button className="PressCartMainTextBtn sm:p-2 sm:px-4 bg-gray-300 rounded-full hover:bg-slate-400 ">
                <i className="fa-solid fa-chevron-right text-zinc-500 hover:text-zinc-950"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
