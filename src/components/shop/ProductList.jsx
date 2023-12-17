import {Product} from "./Product.jsx";

export function ProductList(
    {
        cart,
        storeData,
        addItemToCart,
        removeItemFromCart
    }
) {
    return (
        <ul className="products">
            {
                storeData.map((item) => {
                    return (
                        <Product
                            cart={cart}
                            item={item}
                            addItemToCart={addItemToCart}
                            removeItemFromCart={removeItemFromCart}
                        />
                    )
                })
            }
        </ul>
    )
}