import {useEffect, useState} from "react";

export function Cart({cart, setCart}) {

    const [showPaymentModal, setShowPaymentModal] = useState(false);

    useEffect(() => {
        let timeOut = null;
        if (showPaymentModal) {
            timeOut = setTimeout(function () {
                setShowPaymentModal(false);
            }, 3000);
        }

        return () => {
            if (timeOut) {
                clearTimeout(timeOut);
            }
        };
    }, [showPaymentModal]);


    if (showPaymentModal) {
        return (
            <div className="process-modal">
                <p>Process payment...</p>
                <div className="payment-process-circle"></div>
            </div>
        )
    }

    function increaseItemQty(id) {
        setCart(cart.map((item) => {
            if (item.id === id) {
                if (item.qty === 5) {
                    return {...item};
                }
                const updatedQty = item.qty + 1;
                return {...item, qty: updatedQty}
            }
            return item;
        }));
    }

    function decreaseItemQty(id) {
        const item = cart.find(item => item.id === id);
        if (item.qty === 1) {
            setCart(cart.filter(item => item.id !== id));
            return;
        }
        setCart(cart.map((item) => {
            if (item.id === id) {
                const updatedQty = item.qty - 1;
                return {...item, qty: updatedQty}
            }
            return item;
        }));
    }

    function getPriceWithQty(id) {
        const item = cart.find(item => item.id === id);
        return item.price * item.qty;
    }

    function getItemPrice(cart) {
        let price = 0;
        for (const item of cart) {
            price += getPriceWithQty(item.id);
        }
        return price;
    }

    function clearCart() {
        setCart([]);
    }

    function checkout() {
        setShowPaymentModal(true);
    }

    const total = getItemPrice(cart);

    return (
        <section className="cart-section">
            <h2 className="section-title cart-section-title">Cart</h2>
            <ul className="cart-items">
                {cart.map((item) => {
                    return (
                        <li className="cart-item" key={item.id}>
                            <img className="cart-item-img" src={item.image} alt="cart-item"/>
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
                                <p className="cart-item-price">${getPriceWithQty(item.id)}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <hr className="divider"/>
            <p className="total">Total : ${total.toFixed(2)}</p>
            <button className="checkout-btn" onClick={checkout}>Check out</button>
            <button className="clear-cart-btn" onClick={clearCart}>Clear</button>
        </section>
    )
}