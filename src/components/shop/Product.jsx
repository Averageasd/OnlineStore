import {ProductInfo} from "./ProductInfo.jsx";
import {ProductAction} from "./ProductAction.jsx";

export function Product({cart, item, addItemToCart, removeItemFromCart}) {
    return (
        <li className="item" key={item.id}>
            <ProductInfo item={item}/>
            <ProductAction
                cart={cart}
                item={item}
                addItemToCart={addItemToCart}
                removeItemFromCart={removeItemFromCart}
            />
        </li>
    )
}