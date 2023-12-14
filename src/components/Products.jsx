import "../App.css";
import {useLoaderData, useLocation} from "react-router-dom";

export async function loadStoreItems() {
    const storeResponse = await fetch('https://fakestoreapi.com/products');
    if (!storeResponse.ok) {
        throw new Error(`error has occurred : ${storeResponse.status}`)
    }
    const data = await storeResponse.json();
    return data;
}

export function Products(props) {
    const storeData = useLoaderData();
    const {state} = useLocation();
    console.log(state);

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
                                <p className="item-quantity">{item.qty ? item.qty : '0'}</p>
                                <button>add to cart</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}