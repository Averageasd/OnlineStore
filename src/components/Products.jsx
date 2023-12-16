import "../App.css";
import {useLoaderData} from "react-router-dom";

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

    function removeItemFromCart(id){
        setCart(cart.filter(item => item.id !==id));
    }

    return (
        <>
            <h1>Product</h1>
            <ul>
                {
                    storeData.map((item) => {
                        return (
                            <li className="item" key={item.id}>
                                <img className="item-img" src={item.image} alt="item"/>
                                <p className="item-title">{item.title}</p>
                                <p className="item-price">{item.price.toFixed(2)}</p>
                                {cart.some(cartItem => cartItem.id === item.id) ?
                                    <button className="add-item-btn" onClick={() => removeItemFromCart(item.id)}>remove from cart</button> :
                                    <button className="add-item-btn" onClick={() => addItemToCart(item.id)}>add to cart</button>}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}