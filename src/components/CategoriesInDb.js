import React, { useState, useEffect } from 'react';
import Category from './Category';


function CategoriesInDb() {

    // const [categories, setCategories] = useState([]);
    const [categories, setCategories] = useState({});
    const [countByCat, setCountByCat] = useState([]);

    useEffect(() => {
        updateCategories();
    }, []);

    function apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    function updateCategories(){
        apiCall("http://localhost:3001/api/products", showCategories)
    }

    function showCategories(data){
        setCategories(data.meta.countByCategory);
        setCountByCat(Object.values(data.meta.countByCategory))
    }


    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800">Categories in Data Base</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {
                                Object.keys(categories).map((category, index) => {
                                    return <Category  category = {category} count = {countByCat[index]} key={index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )


}
export default CategoriesInDb;