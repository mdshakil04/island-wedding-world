import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Home/Services/Service";
import Gallery from "../Pages/Gallery/Gallery";
import Destinations from "../Pages/Destinations/Destinations";
import Services from "../Pages/Home/Services/Services";
import About from "../Pages/About Us/About";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
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
            }
        ]
    }
])
export default routes;