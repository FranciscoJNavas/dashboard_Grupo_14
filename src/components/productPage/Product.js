import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

function Product(props) {

	const fieldRows = document.getElementById("inputGroupSelect03");

	const [listProducts, setListProducts] = useState([]);
	const [pagination, setPagination] = useState({
		limit: 200,
		offset: 0
	})
	const [pages, setPages] = useState(0);

	useEffect(() => {
		updateListProducts(pagination.limit, pagination.offset);
	}, []);

	function apiCall(url, consecuencia) {
		fetch(url)
			.then(response => response.json())
			.then(data => consecuencia(data))
			.catch(error => console.log(error))
	}

	function updateListProducts(limit, offset) {
		console.log(limit, offset)
		apiCall(`http://localhost:3001/api/products?limit=${limit}&offset=${offset}`, showListProducts)
	}

	function showListProducts(data) {
		setListProducts(data.data);
		let pagesToShow = Number(JSON.parse(localStorage.total)) / data.data.length;
		console.log(pagesToShow,"pagesToShow")
		setPages(pagesToShow);
	}

	function updateRowsByLimit(){
		console.log(fieldRows.value);
		updateListProducts(Number(fieldRows.value)+1,0)
	}

	function updateRowsByOffset(offset){
		let newOffset = offset*(Number(fieldRows.value)+1);
		let newLimit = Number(fieldRows.value)+1;
		updateListProducts(newLimit,newOffset)
	}

	return (
		<React.Fragment>
			{/*<!-- PRODUCTS LIST -->*/}
			<h1 className="h3 mb-2 text-gray-800">All products in Database</h1>



			<div className="row">
				<div className="col">
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<label className="input-group-text" for="inputGroupSelect03">Products by Page</label>
						</div>
						<select onChange={() => updateRowsByLimit()} className="custom-select" id="inputGroupSelect03">
							<option selected>Choose...</option>
							{
								props.allProducts.map((product, index) => {
									return (
										<option value={index}>{index + 1}</option>
									)
								})
							}
						</select>
					</div>
				</div>
				<div className="col">
					<nav aria-label="...">
						<ul class="pagination pagination-sm">
							{
								props.allProducts.map((product, index) => {
									if (index < pages) {
										return (
											<li class="page-item"><button onClick={() => updateRowsByOffset(index)} class="page-link">{index + 1}</button></li>
										)
									}
								})
							}
						</ul>
					</nav>
				</div>
			</div>

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
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
export default Product;