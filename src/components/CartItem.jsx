import {CartEditAction} from "./CartEditAction.jsx";

export function CartItem(
    {
        item,
        increaseItemQty,
        decreaseItemQty,
        getPriceWithQty
    }
) {
    return (
        <li className="cart-item" key={item.id}>
            <img className="cart-item-img" src={item.image} alt="cart-item"/>
            <CartEditAction
                item={item}
                increaseItemQty={increaseItemQty}
                decreaseItemQty={decreaseItemQty}
                getPriceWithQty={getPriceWithQty}/>
        </li>
    )
}