import './App.css'
import {Outlet} from "react-router-dom";
import {Nav} from "./Nav.jsx";

function App({cart}) {
    function countCartItems(cart) {
        let counter = 0;
        for (const item of cart) {
            counter += item.qty;
        }
        return counter;
    }

    const cartItemCount = countCartItems(cart);
    return (
        <>
            <Nav cartItemCount={cartItemCount}></Nav>
            <Outlet></Outlet>
        </>
    )

}

export default App
