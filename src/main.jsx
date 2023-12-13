import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./components/Home.jsx";
import {Products} from "./components/Products.jsx";
import App from "./App.jsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>,
            children: [
                {
                    index: true,
                    element:<Home/>
                },
                {
                    path:"/home",
                    element:<Home/>
                },
                {
                    path: "/product",
                    element:<Products/>
                }
            ]
        },

    ]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
