import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ErrorElement from "../shared/ErrorElement/ErrorElement";
import Gallery from "../pages/Gallery/Gallery";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/gallery",
                element: <Gallery />,
            },
        ]
    },
]);

export default router