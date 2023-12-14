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

export function Products() {
    const storeData = useLoaderData();
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
                                <p className="item-price">{item.price}</p>
                                <button>add to cart</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}