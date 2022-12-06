import React from 'react';
import App from './App';
import '../assets/css/app.css';
import { Routes, Route, Link } from "react-router-dom";
import LastProductInDb from './LastProductInDb';
import Product from './Product';
import Order from './Order';
import Footer from './Footer';
import CardsOrders from './CardsOrders';


function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/last" element={<LastProductInDb />} />
        <Route path="/all" element={<Product />} />
        <Route path="/orders" element={[<CardsOrders/> , <Order /> , <Footer/>]} />
      </Routes>
    </div>
  );
}

export default Router;