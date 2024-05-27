import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { numberShipping, numberFlatRate } from "./Cart";

const btn = [
  { name: "1. Shopping Cart", href: "", color: false },
  { name: "2. CheckOut", href: "/Checkout", color: true },
  { name: "3. Order Complete", href: "/OrderCompleted", color: false },
];

function CheckOutPage() {
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      CompanyName: "",
      Country: "",
      StreetAddress: "",
      Town: "",
      zip: "",
      state: "",
      Phone: "",
      Email: "",
      OrderNotes: "",
      options: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.FirstName) {
        errors.FirstName = "Please enter a FirstName";
      }

      if (!values.LastName) {
        errors.LastName = "Please enter a LastName";
      }

      if (!values.CompanyName) {
        errors.CompanyName = "Please enter a CompanyName";
      }

      if (!values.Country) {
        errors.Country = "Please enter a Country";
      }

      if (!values.StreetAddress) {
        errors.StreetAddress = "Please enter a StreetAddress";
      }

      if (!values.Town) {
        errors.Town = "Please enter a Town";
      }

      if (!values.zip) {
        errors.zip = "Please enter a zip";
      }

      if (!values.state) {
        errors.state = "Please enter a state";
      }

      if (!values.Phone) {
        errors.Phone = "Please enter a Phone";
      } else if (values.Phone.length !== 10) {
        errors.Phone = "Please Enter 10 Digit PhoneNo.";
      }

      if (!values.Email) {
        errors.Email = "Please enter a Email";
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.Email)) {
        errors.Email = "Please Fullfill Reqirement";
      }

      if (!values.OrderNotes) {
        errors.OrderNotes = "Please enter a OrderNotes";
      }

      if (!selectedOption) {
        errors.options = "Please select an option";
      }

      return errors;
    },
    onSubmit: (values) => {
      const email = formik.values.Email;
      const PaymentMethod = selectedOption;
      const encodedEmail = encodeURIComponent(email);
      const encodedPay = encodeURIComponent(PaymentMethod);
      console.log(values, "wshfjs");
      Navigate(
        `/AddToCart/OrderCompleted?email=${encodedEmail}&PaymentMethod=${encodedPay}`
      );
    },
  });

  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const Navigate = useNavigate();
  const handlebtn = () => {
    formik.handleSubmit();
  };
  const cart = useSelector((state) => state.addtocart.cart); 
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(cart.length);
  }, [cart]);
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

  return (
    <>
      <NavBar cartItemCount={cartItemCount} />
      <div
        style={{ fontFamily: "Josefin Sans" }}
        className="flex justify-center w-full"
      >
        <div className="sm:w-9/12  p-10">
          <div className="ThreeMainBtn lg:flex lg:justify-center 2xl:gap-14 sm:gap-0 sm:grid sm:grid-rows-3 ">
            {btn?.map((value, index) => {
              return (
                <button
                  className={classNames(
                    value.color
                      ? "text-orange-400"
                      : " hover:transition-all text-gray-600 hover:text-orange-400",
                    "Mainbtns 2xl:text-4xl xl:text-3xl lg:text-2xl   mt-10 sm:mt-4"
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
            className="sm:mt-14 py-5 "
          >
            <div className="lg:flex lg:justify-between gap-10">
              <div className="BillingDetail lg:w-8/12">
                <div style={{ color: "gray" }} className="BillingDetailW py-5 ">
                  <h1 className="text-3xl">Billing Details</h1>
                </div>
                <hr />
                <div className="py-10 ">
                  <div className="sm:flex sm:justify-between ">
                    <div className="sm:w-6/12   ">
                      <label className="sm:text-lg" htmlFor="">
                        First Name*
                      </label>
                      <div>
                        <input
                          className="w-full p-5 border-2 mt-5 mb-5"
                          type="text"
                          name="FirstName"
                          required
                          placeholder="Enter Your First Name..."
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.FirstName}
                        />
                        {formik.errors.FirstName && (
                          <span className="error">
                            {formik.errors.FirstName}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="sm:w-5/12   ">
                      <label className="sm:text-lg" htmlFor="">
                        Last Name*
                      </label>
                      <div>
                        <input
                          className="w-full p-5 border-2 mt-5 mb-5"
                          type="text"
                          name="LastName"
                          required
                          placeholder="Enter Your Last Name..."
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.LastName}
                        />
                        {formik.errors.LastName && (
                          <span className="error">
                            {formik.errors.LastName}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="my-10">
                    <label className="sm:text-lg" htmlFor="">
                      Company Name (optional)
                    </label>
                    <div>
                      <input
                        className="w-full p-5 border-2 mt-5 mb-5"
                        type="text"
                        name="CompanyName"
                        required
                        placeholder="Enter Your Company Name..."
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.CompanyName}
                      />
                      {formik.errors.CompanyName && (
                        <span className="error">
                          {formik.errors.CompanyName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="my-10">
                    <label className="sm:text-lg" htmlFor="">
                      Country / Region*
                    </label>
                    <div className="my-5">
                      <select
                        className="sm:p-4 p-2 border-2 w-full text-gray-400"
                        name="Country"
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Country}
                      >
                        <option value="text">Select any country</option>
                        <option value="India">India</option>
                        <option value="United States (US)">
                          United States (US)
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="France">France</option>
                        <option value="Austria">Austria</option>
                      </select>
                      {formik.touched.Country && formik.errors.Country && (
                        <span className="error">{formik.errors.Country}</span>
                      )}
                    </div>
                  </div>
                  <div className="my-10">
                    <label className="sm:text-lg" htmlFor="">
                      Street Address
                    </label>
                    <div>
                      <input
                        className="w-full p-5 border-2 mt-5 mb-5"
                        type="text"
                        name="StreetAddress"
                        required
                        placeholder="Enter Your House number and street name..."
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.StreetAddress}
                      />
                      {formik.errors.StreetAddress && (
                        <span className="error">
                          {formik.errors.StreetAddress}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="sm:flex sm:justify-between ">
                    <div className="sm:w-5/12   ">
                      <label className="sm:text-lg" htmlFor="">
                        Town / City
                      </label>
                      <div>
                        <input
                          className="w-full p-5 border-2 mt-5 mb-5"
                          type="text"
                          name="Town"
                          required
                          placeholder="Town / City"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Town}
                        />
                        {formik.errors.Town && (
                          <span className="error">{formik.errors.Town}</span>
                        )}
                      </div>
                    </div>
                    <div className="sm:w-5/12   ">
                      <label className="sm:text-lg" htmlFor="">
                        Postcode / ZIP*
                      </label>
                      <div>
                        <input
                          className="w-full p-5 border-2 mt-5 mb-5"
                          type="text"
                          name="zip"
                          required
                          placeholder="Enter ZIP code..."
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.zip}
                        />
                        {formik.errors.zip && (
                          <span className="error">{formik.errors.zip}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="sm:flex sm:justify-between my-5">
                    <div className="sm:w-5/12   ">
                      <label className="sm:text-lg" htmlFor="">
                        State / Country*
                      </label>
                      <div>
                        <input
                          className="w-full p-5 border-2 mt-5 mb-5"
                          type="text"
                          name="state"
                          required
                          placeholder="State / Country"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.state}
                        />
                        {formik.errors.state && (
                          <span className="error">{formik.errors.state}</span>
                        )}
                      </div>
                    </div>
                    <div className="sm:w-5/12   ">
                      <label className="sm:text-lg" htmlFor="">
                        Phone*
                      </label>
                      <div>
                        <input
                          className="w-full p-5 border-2 mt-5 mb-5"
                          type="text"
                          name="Phone"
                          required
                          placeholder="Enter Your Phone number..."
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Phone}
                        />
                        {formik.errors.Phone && (
                          <span className="error">{formik.errors.Phone}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="sm:my-10">
                    <label className="sm:text-lg" htmlFor="">
                      Email Address*
                    </label>
                    <div>
                      <input
                        className="w-full p-5 border-2 mt-5 mb-5"
                        type="text"
                        name="Email"
                        required
                        placeholder="Enter your Email Address...."
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Email}
                      />
                      {formik.errors.Email && (
                        <span className="error">{formik.errors.Email}</span>
                      )}
                    </div>
                  </div>
                  <div style={{ color: "gray" }} className=" sm:mt-10  py-5 ">
                    <h1 className="sm:text-3xl">Additional Information</h1>
                  </div>
                  <div>
                    <h1>Order Notes (optional)</h1>
                    <div>
                      <input
                        className="w-full border-2 sm:pb-48 p-5 mt-4 sm:text-lg"
                        type="text"
                        name="OrderNotes"
                        required
                        placeholder="Write your Review here....."
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.OrderNotes}
                      />
                      {formik.errors.OrderNotes && (
                        <span className="error">
                          {formik.errors.OrderNotes}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="YourOrder lg:w-5/12 h-2/3 border-4 sm:p-7">
                <div>
                  <h1 className="sm:text-3xl sm:mb-4 text-gray-500">
                    Your Order
                  </h1>
                  <hr />
                </div>
                <div className="sm:my-7   ">
                  <h1 className="sm:text-2xl sm:mb-4 text-gray-500">Product</h1>
                  {cart.map((value) => {
                    return (
                      <div className="flex justify-between my-2">
                        <h1 className="sm:text-lg"> {value.name}</h1>
                        <h1 className="sm:text-xl">₹{value.price}</h1>
                      </div>
                    );
                  })}
                  <hr />
                </div>
                <div className="sm:my-7   ">
                  <div className="flex justify-between">
                    <h1 className="sm:text-2xl sm:mb-4 text-gray-500">
                      Subtotal
                    </h1>
                    <h1 className="sm:text-2xl"> ₹{pricing}</h1>
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
                <div className="sm:mt-5">
                  <div className="sm:my-7   ">
                    <div className="flex justify-between">
                      <h1 className="sm:text-2xl sm:mb-4 text-gray-500">
                        Total
                      </h1>
                      <h1 className="sm:text-2xl"> ₹{pricingRate}</h1>
                    </div>
                    <hr />
                  </div>
                  <div className="mb-6">
                    <h1 className="sm:text-2xl text-gray-600">
                      Payment Method
                    </h1>
                    <div className=" flex gap-3 mt-2 items-start">
                      <input
                        className="mt-1"
                        type="radio"
                        name="options"
                        value="Pay with Card"
                        checked={selectedOption === "Pay with Card"}
                        onChange={handleOptionChange}
                      />
                      <span className="sm:text-lg text-gray-500">
                        Pay with Card
                      </span>
                    </div>
                    <div className=" flex gap-3 mt-2 items-start">
                      <input
                        className="mt-1"
                        type="radio"
                        name="options"
                        value="Cash on delivery"
                        checked={selectedOption === "Cash on delivery"}
                        onChange={handleOptionChange}
                      />
                      <span className="sm:text-lg text-gray-500">
                        Cash on delivery
                      </span>
                    </div>
                    {formik.errors.options && (
                      <span className="error">{formik.errors.options}</span>
                    )}
                  </div>
                  <div>
                    <button
                      onClick={handlebtn}
                      className="btnHover1 p-5 w-full "
                    >
                      PLACE ORDER
                    </button>
                  </div>
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

export default CheckOutPage;
