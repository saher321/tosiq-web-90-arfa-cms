import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "../pages/Home"

const Routes = () => {
    const router = createBrowserRouter([
        { path: "/", element: <Home /> }
    ]);
    return  (
        <RouterProvider router={router} />
    )
}

export default Routes