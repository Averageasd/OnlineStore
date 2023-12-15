import './App.css'
import {Link, Outlet} from "react-router-dom";

function App({cart}) {
    function countCartItems(cart){
        let counter = 0;
        for (const item of cart){
            counter += item.qty;
        }
        return counter;
    }

    const cartItemCount = countCartItems(cart);
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
                    <Link to="/cart">Cart({cartItemCount})</Link>
                </li>
            </ul>
            <Outlet></Outlet>
        </>
    )

}

export default App
