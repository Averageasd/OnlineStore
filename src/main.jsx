import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <div>Home</div>,
            children: [
                {
                    path: "/product",
                    element: <div>product page</div>
                }
            ]
        },

    ]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
