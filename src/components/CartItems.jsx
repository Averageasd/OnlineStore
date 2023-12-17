import {CartItem} from "./CartItem.jsx";

export function CartItems(
    {
        cart,
        increaseItemQty,
        decreaseItemQty,
        getPriceWithQty
    }) {
    return (
        <ul className="cart-items">
            {cart.map((item) => {
                return (
                    <CartItem
                        item={item}
                        increaseItemQty={increaseItemQty}
                        decreaseItemQty={decreaseItemQty}
                        getPriceWithQty={getPriceWithQty}/>
                )
            })}
        </ul>
    )
}
