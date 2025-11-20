import type { RouteObject } from "react-router-dom";
import MainLandingPage from "../components/pages/LandingPage/MainLanding";
import Login from "../components/pages/Login/Login";

const routes: RouteObject[] = [
    {
        path:'/',
        element: <MainLandingPage/>
    },
    {
        path:'/login',
        element: <Login/>
    }
]

export default routes;