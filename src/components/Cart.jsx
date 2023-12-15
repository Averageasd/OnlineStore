export function Cart({cart, setCart}) {

    function increaseItemQty(id){
        setCart(cart.map((item) =>{
            if (item.id === id){
                if (item.qty === 5){
                    return {...item};
                }
                const updatedQty = item.qty + 1;
                return {...item, qty : updatedQty, price : updatedQty * item.price}
            }
            return item;
        }));
    }
    return (
        <>
            <ul className="cart-items">
                {cart.map((item) => {
                    return (
                        <li className="cart-item" key={item.id}>
                            <img className="cart-item-img" src={item.image} alt="cart-item"/>
                            <div className="cart-item-edit">
                                <button className="plus-qty" onClick={() => increaseItemQty(item.id)}><span className="plus-symbol">+</span></button>
                                <input id="item-qty" type="number" name="item-qty" readOnly={true} value={item.qty} min={1}
                                       max={15} step={1}/>
                                <button className="minus-qty"><span className="minus-symbol">-</span></button>
                            </div>
                            <p className="cart-item-price">${item.price}</p>

                        </li>
                    )
                })}
            </ul>
        </>
    )
}