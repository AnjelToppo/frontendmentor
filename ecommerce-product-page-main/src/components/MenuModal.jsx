import {useContext, useEffect, useRef} from "react";
import {CartsContext, CartsDispatchContext} from "../context/CartsContext.jsx";

export default function MenuModal() {
    const carts = useContext(CartsContext);
    const dispatch = useContext(CartsDispatchContext);
    const menuRef = useRef(null);

    useEffect(() => {
        if (carts.isMenuOpen) {
            menuRef.current.showModal();
        }
    }, [carts.isMenuOpen]);
    return (
        <dialog ref={menuRef} className="menu-modal">
            <button onClick={() => dispatch({type: 'close-menu'})}><img src="images/icon-close.svg" alt=""/></button>
            <nav>
                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </dialog>
    )
}