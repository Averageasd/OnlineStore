import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/home">home</Link>
                </li>
                <li>
                    <Link to="/product">product</Link>
                </li>
            </ul>


            <Outlet></Outlet>
        </>
    )

}

export default App
