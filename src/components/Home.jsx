import "../App.css";
import {Link} from "react-router-dom";

export function Home() {
    return (
        <>
            <h1>Home</h1>
            <section className="hero">
                <section className="hero-text">
                    <p>Happy shopping</p>
                    <Link to="/product">Shop now</Link>
                </section>
            </section>
        </>
    )
}