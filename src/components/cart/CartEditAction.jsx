export function CartEditAction(
    {
        item,
        increaseItemQty,
        decreaseItemQty,
        getPriceWithQty,
    }
) {
    return (
        <div className="cart-item-info">
            <div className="cart-item-edit">
                <button className="plus-qty" onClick={() => increaseItemQty(item.id)}><span
                    className="plus-symbol">+</span></button>
                <input id="item-qty" type="number" name="item-quantity" readOnly={true}
                       value={item.qty}
                       min={1}
                       max={15} step={1}/>
                <button className="minus-qty" onClick={() => decreaseItemQty(item.id)}><span
                    className="minus-symbol">-</span></button>
            </div>
            <p className="cart-item-price">${getPriceWithQty(item.id).toFixed(2)}</p>
        </div>
    )
}