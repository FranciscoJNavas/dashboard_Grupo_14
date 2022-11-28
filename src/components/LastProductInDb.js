import React, { useState, useEffect } from 'react';

function LastProductInDb() {

    const [lastProduct, setLastProduct] = useState({});

    useEffect(() => {
        updateLastProduct();
    }, []);

    function apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    function updateLastProduct() {
        apiCall("http://localhost:3001/api/products", showLastProduct)
    }

    function showLastProduct(data) {
        setLastProduct(data.data[data.meta.total - 1]);
    }


    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                </div>
                <div className="card-body">
                    <h6 className="m-0 font-weight-bold text-gray-800">{lastProduct.name}</h6>
                    <h7 className="m-0 font-weight-bold text-gray-800">${lastProduct.price}</h7>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={lastProduct.image} alt=" Image last product " />
                    </div>
                    <p>{lastProduct.features}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;

