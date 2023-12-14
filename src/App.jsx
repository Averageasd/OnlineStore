import './App.css'
import {Link, Outlet} from "react-router-dom";
import {useState} from "react";

function App(props) {
    return (
        <>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/product">Shop</Link>
                </li>
                <li>
                    <Link to="/cart">Cart({props.cart.length})</Link>
                </li>
            </ul>
            <Outlet></Outlet>
        </>
    )

}

export default App
