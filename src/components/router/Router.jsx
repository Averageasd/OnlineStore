import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "../../App.jsx";
import {Home} from "../home/Home.jsx";
import {loadStoreItems, Products} from "../shop/Products.jsx";
import {Cart} from "../cart/Cart.jsx";
import {useState} from "react";

export function Router() {
    const [cart, setCart] = useState([]);
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <App cart = {cart}/>,
                children: [
                    {
                        index: true,
                        element: <Home/>
                    },
                    {
                        path: "/home",
                        element: <Home/>
                    },
                    {
                        path: "/product",
                        loader: loadStoreItems,
                        element: <Products cart = {cart} setCart = {setCart}/>
                    },
                    {
                        path: "/cart",
                        element: <Cart cart = {cart} setCart = {setCart}/>,
                    }
                ]
            },

        ]);
    return <RouterProvider router={router}></RouterProvider>
}