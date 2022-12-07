import React from 'react';
import App from './home/App';
import '../assets/css/app.css';
import { Routes, Route} from "react-router-dom";
import Product from './home/Product';
import Order from './orderPage/Order';
import Footer from './Footer';
import CardsOrders from './cards/CardsOrders';
import FilterPage from './filterPage/FilterPage';


function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/all" element={<Product />} />
        <Route path="/orders" element={[<CardsOrders/> , <Order /> , <Footer/>]} />
      </Routes>
    </div>
  );
}

export default Router;