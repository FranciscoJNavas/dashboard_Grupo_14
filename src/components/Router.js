import React from 'react';
import App from './App';
import '../assets/css/app.css';
import { Routes, Route, Link } from "react-router-dom";
import Product from './Product';
import Order from './Order';
import Footer from './Footer';
import CardsOrders from './CardsOrders';
import Filter from './Filter';


function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/all" element={<Product />} />
        <Route path="/orders" element={[<CardsOrders/> , <Order /> , <Footer/>]} />
      </Routes>
    </div>
  );
}

export default Router;