import "../App.css";
import {useLoaderData} from "react-router-dom";
import {ProductList} from "./ProductList.jsx";

export async function loadStoreItems() {
    const storeResponse = await fetch('https://fakestoreapi.com/products');
    if (!storeResponse.ok) {
        throw new Error(`error has occurred : ${storeResponse.status}`)
    }
    const data = await storeResponse.json();
    return data;
}

export function Products({cart, setCart}) {
    const storeData = useLoaderData();

    function addItemToCart(id) {
        const updatedCart = [...cart];
        const isItemInCart = cart.some(item => item.id === id);
        if (!isItemInCart) {
            updatedCart.push({...storeData.find(item => item.id === id), qty: 1});
            setCart(updatedCart);
        }
    }

    function removeItemFromCart(id) {
        setCart(cart.filter(item => item.id !== id));
    }

    return (
        <section className="product-section">
            <h2 className="section-title product-section-title">Product</h2>
            <ProductList
                cart={cart}
                storeData={storeData}
                removeItemFromCart={removeItemFromCart}
                addItemToCart={addItemToCart}
            />
        </section>
    )
}