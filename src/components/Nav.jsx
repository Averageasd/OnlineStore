import {Link} from "react-router-dom";

export function Nav({cartItemCount}) {
    return (
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
    )
}