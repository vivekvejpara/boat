import { useFormik } from "formik";
import React from "react";
import "../Pages/HomePage.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function FormikForm() {
  const Navigate = useNavigate();
  const cart = useSelector((state) => state.addtocart.cart);
  const pricing = cart.reduce((a, b) => a + b.price, 0);
  const formik = useFormik({
    initialValues: {
      country: "",
      state: "",
      town: "",
      zip: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.country) {
        errors.country = "Please enter a country";
      }
      if (!values.state) {
        errors.state = "Please enter a state";
      }
      if (!values.town) {
        errors.town = "Please enter a town";
      }
      if (!values.zip) {
        errors.zip = "Please enter a zip code";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values, "wshfjs");
      Navigate(`/AddToCart/Checkout`);
    },
  });

  const handlebtn = () => {
    formik.handleSubmit();
  };

  return (
    <>
      <h1 className="text-xl text-gray-600">Shipping to CA.</h1>
      <form action="" id="form">
        <div className="my-5">
          <select
            className="sm:p-4 p-2 border-2 w-full text-gray-400"
            name="country"
            required
            id="country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
          >
            <option value="text">Select any country</option>
            <option value="India">India</option>
            <option value="United States (US)">United States (US)</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="France">France</option>
            <option value="Austria">Austria</option>
          </select>
          {formik.touched.country && formik.errors.country && (
            <span className="error">{formik.errors.country}</span>
          )}
        </div>

        <div className="my-5">
          <select
            className="sm:p-4 p-2 border-2 w-full text-gray-400"
            name="state"
            required
            id="state"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.state}
          >
            <option value="Select any state">Select any state</option>
            <option value="Delhi">Delhi</option>
            <option value="California">California</option>
            <option value="Alaska">Alaska</option>
            <option value="Delaware">Delaware</option>
            <option value="Hawaii">Hawaii</option>
          </select>
          {formik.errors.state && (
            <span className="error">{formik.errors.state}</span>
          )}
        </div>
        <div className="my-5">
          <input
            className="sm:p-4 p-2  border-2 w-full text-gray-400"
            type="text"
            name="town"
            required
            id="town"
            placeholder="Town / City"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.town}
          />
          {formik.errors.town && (
            <span className="error">{formik.errors.town}</span>
          )}
        </div>
        <div className="my-5">
          <input
            className="sm:p-4 p-2  border-2 w-full text-gray-400"
            type="text"
            name="zip"
            id="zip"
            required
            placeholder="Postcode / ZIP"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zip}
          />
          {formik.errors.zip && (
            <span className="error">{formik.errors.zip}</span>
          )}
        </div>

        <div className="sm:my-7 my-3">
          <div className="flex justify-between">
            <h1 className="sm:text-2xl mb-3 sm:mb-4 text-gray-500">Total</h1>
            <h1 className="sm:text-2xl"> ₹{pricing}</h1>
          </div>
          <hr />
        </div>
        <div>
          <button
            onClick={handlebtn}
            className="btnHover1 bg-gray-900 p-5 w-full"
            type="button"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </form>
    </>
  );
}

export default FormikForm;
