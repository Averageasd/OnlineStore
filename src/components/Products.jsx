import "../App.css";
import {useLoaderData} from "react-router-dom";

export async function loadStoreItems() {
    const storeResponse = await fetch('https://fakestoreapi.com/products');
    if (!storeResponse.ok) {
        throw new Error(`error has occured : ${storeResponse.status}`)
    }
    const data = await storeResponse.json();
    console.log(data);
    return data;
}

export function Products() {
    const storeData = useLoaderData();
    return (
        <>
            <h1>Product</h1>
            <ul>
                {
                    storeData.map((item) =>{
                        return (
                            <li className="item" key={item.id}>
                                <div className="item-img-container">
                                    <img className="item-img" src={item.image} alt="item"/>
                                </div>
                                <p className="item-title">Item title</p>
                                <p className="item-price">$150</p>
                                <button>add to cart</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>

    )
}