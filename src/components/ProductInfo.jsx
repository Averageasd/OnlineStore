export function ProductInfo({item}) {
    return (
        <>
            <img className="item-img" src={item.image} alt="item"/>
            <p className="item-title">{item.title}</p>
            <p className="item-price">{item.price.toFixed(2)}</p>
        </>
    )
}