import React, { useState, useEffect } from 'react';
import OrderList from '../orderPage/OrderList';
import ProductList from '../productPage/ProductList';


function Filter() {

    const fieldUser = document.getElementById("inputGroupSelect01");
    const fieldTable = document.getElementById("inputGroupSelect02");

    const [display, setDisplay] = useState("none");
    const [users, setUsers] = useState([]); //arreglo de usuarios
    const [products, setProducts] = useState([]); //arreglo de productos cargados por ese usuario
    const [orders, setOrders] = useState([]); //arreglo de ordenes de ese usuario


    useEffect(() => {
        updateUsers();
    }, []);

    function apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    function updateUsers() {
        apiCall("http://localhost:3001/api/users", loadUsers)
    }

    function updateOrders(userId) {
        apiCall(`http://localhost:3001/api/orders/${userId}`, loadOrders)
    }

    function updateProducts() {
        apiCall(`http://localhost:3001/api/products`, loadProducts)
    }

    function loadUsers(data) {
        setUsers(data.data);
    }

    function loadProducts(data) {
        let arrayProducts = data.data;
        let arrayProductsByUser = arrayProducts.filter((product) => (product.users[0].id == fieldUser.value))
        console.log(arrayProductsByUser);
        setProducts(arrayProductsByUser);
    }

    function loadOrders(data) {
        setOrders(data.data);
        console.log(orders);
    }

    function findData() {
        // console.log(fieldUser.value, fieldTable.value);
        if (fieldTable.value === "Orders") {
            updateOrders(fieldUser.value);
            setDisplay("Orders")
        }
        if (fieldTable.value === "Products") {
            updateProducts();
            setDisplay("Products")
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">User</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            {users.map(user => {
                                return (
                                    <option value={user.id}>{user.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="col">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect02">Table</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect02">
                            <option selected>Choose...</option>
                            <option value="Orders">Orders</option>
                            <option value="Products">Products</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="alert alert-danger alert-dismissible" role="alert" id='alert-user'>
                        Favor de seleccionar un usuario
                    </div>
                </div>
                <div className="col">
                    <div className="alert alert-danger" role="alert" id='alert-table'>
                        Favor de seleccionar una tabla
                    </div>
                </div>
            </div>
            <button type="button" onClick={() => findData()} className="btn btn-primary">Find</button>
            {
                display == "Orders" &&
                <>
                    <table className="table">
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
                </>
            }
            {
                display == "Products" &&
                <>
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>User</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>User</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {products.map(product => {
                                return (
                                    <ProductList
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        discount={product.discount}
                                        user={product.users[0].first_name + " " + product.users[0].last_name}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                </>
            }
        </div>
    )
}
export default Filter;