import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import SendMessage from "../Pages/Shared/SendMessage/SendMessage";
import Footer from "../Pages/Shared/Footer/Footer";


const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <SendMessage></SendMessage>
            <Footer></Footer>

        </div>
    );
};

export default Root;