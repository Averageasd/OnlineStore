export function Payment(
    {
        total,
        checkout,
        clearCart
    }) {
    return (
        <>
            <p className="total">Total : ${total.toFixed(2)}</p>
            <button className="checkout-btn" onClick={checkout}>Check out</button>
            <button className="clear-cart-btn" onClick={clearCart}>Clear</button>
        </>
    )
}