export function ProductAction(
    {
        cart,
        item,
        addItemToCart,
        removeItemFromCart
    }) {
    return (
        <>
            {
                cart.some(cartItem => cartItem.id === item.id) ?
                    <button className="add-item-btn"
                            onClick={() => removeItemFromCart(item.id)}>remove from
                        cart</button> :
                    <button className="add-item-btn"
                            onClick={() => addItemToCart(item.id)}>add to
                        cart</button>
            }
        </>
    )
}