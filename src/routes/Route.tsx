import type { RouteObject } from "react-router-dom";
import MainLandingPage from "../components/pages/LandingPage/MainLanding";

const routes: RouteObject[] = [
    {
        path:'/',
        element: <MainLandingPage/>
    },
]

export default routes;