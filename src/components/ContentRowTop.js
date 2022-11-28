import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb'

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Product in DB -->*/}
						<LastProductInDb/>
						{/*<!-- End content row last product in Data Base -->*/}

						{/*<!-- Categories in DB -->*/}
						<CategoriesInDb />
						{/*<!--End Categories In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;