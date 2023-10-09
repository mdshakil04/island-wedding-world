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
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Venues from "../Pages/Destinations/Venues/Venues";
import PrivateRoute from "./PrivateRoute";

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
                path:'/destination',
                element:<Destinations></Destinations>
            },
            {
                path:'/contact',
                element:<PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Registration></Registration>
            },
            {
                path:'/service/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader:() => fetch('../services.json')
            },
            {
                path:'/venues',
                element: <PrivateRoute><Venues></Venues></PrivateRoute>
            }
        ]
    }
])
export default routes;