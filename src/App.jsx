import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {
    console.log("print from root");
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
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>


            <Outlet></Outlet>
        </>
    )

}

export default App
