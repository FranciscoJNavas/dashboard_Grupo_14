import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import OrderList from './OrderList'

function Order() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        updateOrders();
    }, []);

    function apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    function updateOrders() {
        apiCall("http://localhost:3001/api/orders", showOrders);

    }

    function showOrders(data) {
        setOrders(data.data);
    }


    return (
        <React.Fragment>
            {/*<!-- ORDERS LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800">All the orders in the Database</h1>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Orden N°</th>
                                    <th>Productos en la orden</th>
                                    <th>Total</th>
                                    <th>Método de pago</th>
                                    <th>Método de envío</th>
                                    <th>Usuario</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Orden N°</th>
                                    <th>Productos en la orden</th>
                                    <th>Total</th>
                                    <th>Método de pago</th>
                                    <th>Método de envío</th>
                                    <th>Usuario</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {orders.map(order => {
                                    return (
                                        <OrderList
                                            order={order.id}
                                            total={order.total}
                                            paymentMethod={order.paymentMethod}
                                            shippingMethod={order.shippingMethod}
                                            user={order.user.email}
                                            orderItems={order.orderItems}
                                        />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Order;