import React from 'react';
import SideBar from '../SideBar';
import TopBar from '../TopBar';
import Footer from '../Footer';
import CardsOrders from '../cards/CardsOrders'
import Order from '../orderPage/Order'



function OrderPage() {
    return (
        <React.Fragment>
            <div id="wrapper">
                <SideBar />
                <div id="content-wrapper" className="d-flex flex-column">
                    {/*<!-- Main Content -->*/}
                    <div id="content">
                        <TopBar />
                        <CardsOrders/>
                        <Order />
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default OrderPage;