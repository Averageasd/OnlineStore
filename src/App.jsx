import './App.css'
import {Link, Outlet} from "react-router-dom";

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
            <header>
                <nav className="nav">
                    <ul className="link-container">
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
                </nav>

            </header>
            <Outlet></Outlet>
        </>
    )

}

export default App
