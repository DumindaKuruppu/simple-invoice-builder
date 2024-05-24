import {Outlet} from "react-router-dom";
import type {RouteObject} from 'react-router';
import PrivateRoute from "./privateRoute.tsx";
import {Layout as DashboardLayout} from "../layouts/layout.tsx";

export const routes: RouteObject[] = [
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
                        element: <h1>ss</h1>
                    },
                    {
                        path: "/about",
                        // element: <About/>
                    },
                    {
                        path: "/contact",
                        // element: <Contact/>
                    }
                ]
            }
        ]
    }
]