import React from 'react';
import Filter from './Filter';
import SideBar from '../SideBar';
import TopBar from '../TopBar';
import Footer from '../Footer';


function App() {
    return (
        <React.Fragment>
            <div id="wrapper">
                <SideBar />
                <div id="content-wrapper" className="d-flex flex-column">
                    {/*<!-- Main Content -->*/}
                    <div id="content">
                        <TopBar />
                        <Filter />
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;