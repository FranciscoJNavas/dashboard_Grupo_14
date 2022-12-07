import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

function Product() {

	const [listProducts, setListProducts] = useState([]);

	useEffect(() => {
		updateListProducts();
	}, []);

	function apiCall(url, consecuencia) {
		fetch(url)
			.then(response => response.json())
			.then(data => consecuencia(data))
			.catch(error => console.log(error))
	}

	function updateListProducts() {
		apiCall("http://localhost:3001/api/products", showListProducts)
	}

	function showListProducts(data) {
		setListProducts(data.data);
	}

	return (
		<React.Fragment>
			{/*<!-- PRODUCTS LIST -->*/}
			<h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>

			{/*<!-- DataTales Example -->*/}
			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
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
								{listProducts.map(product => {
									return (
										<ProductList
											id = {product.id}
											name = {product.name}
											price = {product.price}
											discount = {product.discount}
											user = {product.users[0].first_name + " " + product.users[0].last_name }
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
export default Product;