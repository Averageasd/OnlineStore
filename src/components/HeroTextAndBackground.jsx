import {Link} from "react-router-dom";

export function HeroTextAndBackground() {
    return (
        <section className="hero-text">
            <h2 className="section-title home-section-title">Online Store</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend purus quis augue dignissim,
                eget vulputate magna condimentum.
                Integer tempor orci tellus, in euismod ante elementum sed.
                Maecenas fermentum enim ipsum, vitae semper elit dictum at.
                Donec at pellentesque erat. Vivamus et convallis erat.</p>
            <Link className="shop-now" to="/product">Shop now</Link>
        </section>
    )
}