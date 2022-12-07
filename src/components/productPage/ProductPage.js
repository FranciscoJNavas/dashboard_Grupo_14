import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar';
import TopBar from '../TopBar';
import Footer from '../Footer';
import Product from './Product';


function ProductPage() {

    const [allProducts, setAllProducts] = useState([]);
	
	useEffect(() => {
		updateAllProducts();
	}, []);

	function apiCall(url, consecuencia) {
		fetch(url)
			.then(response => response.json())
			.then(data => consecuencia(data))
			.catch(error => console.log(error))
	}

	function updateAllProducts() {
		apiCall(`http://localhost:3001/api/products`, showAllProducts)
	}

	function showAllProducts(data) {
        let arrayIndex = data.data.map((product,index) => index);
		setAllProducts(arrayIndex);
	}


    return (
        <React.Fragment>
            <div id="wrapper">
                <SideBar />
                <div id="content-wrapper" className="d-flex flex-column">
                    {/*<!-- Main Content -->*/}
                    <div id="content">
                        <TopBar />
                        <Product allProducts={allProducts} />
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductPage;