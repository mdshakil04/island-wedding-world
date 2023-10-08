import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Destinations from "../Pages/Destinations/Destinations";
import Services from "../Pages/Home/Services/Services";
import About from "../Pages/About Us/About";
import Contact from "../Pages/Contact Us/Contact";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Registration from "../Pages/Registration/Registration";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            },
            {
                path:'/venues',
                element:<Destinations></Destinations>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Registration></Registration>
            }
        ]
    }
])
export default routes;