import {useState} from "react";

export function Cart() {
    const [itemCount, setItemCount] = useState(0);

    function setCount(){
        setItemCount(itemCount + 1);
    }
    return (
        <>
            <p>Item count : {itemCount}</p>
            <button type="button" onClick={setCount}>increase item count</button>
        </>
    )
}