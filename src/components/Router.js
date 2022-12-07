import React from 'react';
import App from './home/App';
import FilterPage from './filterPage/FilterPage';
import ProductPage from './productPage/ProductPage';
import OrderPage from './orderPage/OrderPage'
import Pepito from './Pepito'
import '../assets/css/app.css';
import { Routes, Route} from "react-router-dom";
import SideBar from './SideBar';




function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/all" element={<ProductPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/pepito" element={[<SideBar/> , <Pepito />]} />

      </Routes>
    </div>
  );
}

export default Router;