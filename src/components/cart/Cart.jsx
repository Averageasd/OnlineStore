import {useEffect, useState} from "react";
import {CartItems} from "./CartItems.jsx";
import {Payment} from "./Payment.jsx";

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
            <CartItems
                cart={cart}
                increaseItemQty={increaseItemQty}
                decreaseItemQty={decreaseItemQty}
                getPriceWithQty={getPriceWithQty}
            />
            <hr className="divider"/>
            <Payment total={total} checkout={checkout} clearCart={clearCart}/>
        </section>
    )
}