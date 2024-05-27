import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Categories from "./Pages/Categories";
import Name from "./Pages/Name";
import SinglePageProduct from "./Pages/SinglePageProduct"; 
import TodaysOfferPage from "./Pages/TodaysOfferPage"; 
import Cart from "./Pages/Cart";
import ProductPersonalization from "./Pages/ProductPersonalization";
import GiftwithBoat from "./Pages/GiftwithBoat"; 
import CorporateOrders from "./Pages/CorporateOrders";
import Blogs from "./Pages/Blogs";
import CheckOutPage from "./Pages/CheckOutPage";
import OrderCompleted from "./Pages/OrderCompleted"; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:name" element={<Name />} />
          <Route path="/categories/:name/:id" element={<SinglePageProduct />} /> 
          <Route path="/collectionsdaily-deals" element={<TodaysOfferPage />} />
          <Route path="/collectionsdaily-deals/:name/:id" element={<SinglePageProduct />}/>
          <Route path="/productPersonalization" element={<ProductPersonalization />}/>
          <Route path="/productPersonalization/:name/:id" element={<SinglePageProduct />} />
          <Route path="/giftWithBoat" element={<GiftwithBoat />} />
          <Route path="/giftWithBoat/:name/:id" element={<SinglePageProduct />}/>
          <Route path="/giftWithBoat/collectionsdaily-deals" element={<TodaysOfferPage />} />
          <Route path="/corporateOrders" element={<CorporateOrders />} />
          <Route path="/corporateOrders/:name/:id" element={<SinglePageProduct />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/AddToCart" element={<Cart />} />
          <Route path="/AddToCart/Checkout" element={<CheckOutPage />} />
          <Route path="/AddToCart/OrderCompleted" element={<OrderCompleted />} />
          <Route path="/Products/:id/AddToCart" element={<Cart />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
