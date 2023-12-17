import "../App.css";
import heroImg from "../assets/home-shopping.jpg";
import {Hero} from "./Hero.jsx";

export function Home() {
    return (
        <section className="home"
                 style={
                     {
                         backgroundImage: `url(${heroImg})`
                     }
                 }>
            <Hero></Hero>
        </section>
    )
}