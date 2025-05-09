import {useContext, useEffect, useRef, useState} from "react";
import {CartsContext, CartsDispatchContext} from "../context/CartsContext.jsx";

export default function CartProfile() {
    const cartRef = useRef(null);
    const profileRef = useRef(null);
    const carts = useContext(CartsContext);
    const dispatch = useContext(CartsDispatchContext);
    const [profileClick, setProfileClick] = useState(false);

    useEffect(() => {
        cartRef.current.dataset.open = carts.isCartOpen ? carts.isCartOpen : carts.isCartOpen
    }, [carts]);

    useEffect(() => {
        profileRef.current.dataset.open = `${profileClick}`;
    }, [profileClick]);
    return (
        <div className="cart-profile">
            <button ref={cartRef} onClick={() => {
                dispatch({
                    type: 'cart-modal-toggle'
                })
            }}>{carts.itemQuantity > 0 && <span
                className="item-quantity-notification">{carts.itemQuantity}</span>}</button>
            <img ref={profileRef} onClick={() => {
                setProfileClick(pc => !pc)
            }} className="user-avatar" src="/images/image-avatar.png" alt="user profile avatar"/>
        </div>
    )
}