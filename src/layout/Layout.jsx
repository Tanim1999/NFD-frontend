import { Outlet } from "react-router-dom";
import Navbar from "../sections/Navbar";
import Banner from "../sections/Banner";



const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            
            
        </div>
    );
};

export default Layout;