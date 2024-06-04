import {createBrowserRouter, Outlet} from "react-router-dom";
import PrivateRoute from "./privateRoute.tsx";
import {DashboardLayout} from "../layouts/dashboardLayout.tsx";
import GetStarted from "../pages/getStarted/getStarted.tsx";
import {ErrorPage} from "../pages/errorPage.tsx";

export const router = createBrowserRouter([
    {
        element: <PrivateRoute/>,
        children: [
            {
                path: "/",
                element: (
                    <DashboardLayout>
                        <Outlet/>
                    </DashboardLayout>
                ),
                children: [
                    {
                        path: "/",
                        element: <GetStarted/>,
                    },
                    {
                        path: "/invoice",
                        element: <div>
                            <div style={{background: "red"}}>Invoice</div>
                        </div>
                    },
                    {
                        path: "/contact",
                        // element: <Contact/>
                    }
                ]
            }
        ],
        errorElement: <ErrorPage/>,
    }
])