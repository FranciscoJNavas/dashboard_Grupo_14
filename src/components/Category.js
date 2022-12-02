import React from 'react';

function Category(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        <h7>{props.category}: {props.count}</h7>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Category;