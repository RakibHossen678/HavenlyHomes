import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MaiLayout = () => {
    return (
        <div className="lg:w-11/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MaiLayout;