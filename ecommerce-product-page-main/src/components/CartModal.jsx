import {useContext} from "react";
import {CartsContext, CartsDispatchContext} from "../context/CartsContext.jsx";

export default function CartModal() {
    const carts = useContext(CartsContext);
    const dispatch = useContext(CartsDispatchContext);

    return carts.isCartOpen && <dialog open className="cart-modal">
                <div className="cart-content">
                     <h3 className="cart-title">Cart</h3>
                    <div className="cart-details-container">
                         {carts.itemQuantity === 0 && <p className="cart-message--empty">Your cart is empty.</p>}
                         {carts.itemQuantity > 0 && <div className="product-cart">
                             <div className="cart-item-details">
                                 <img src="images/image-product-1-thumbnail.jpg" alt="shoe"/>
                                 <div className="cart-item-text-container">
                                     <p className="cart-item-name">Fall Limited Edition Sneakers</p>
                                     <div className="cart-item-price-container">
                                         <p className="cart-item-price">$125.00 x <span>{carts.itemQuantity}</span></p>
                                         <span className="cart-item-total">${(Math.round((carts.itemPrice * carts.itemQuantity) * 100) / 100).toFixed(2)}</span>
                                     </div>
                                 </div>
                                 <button className="btn__delete-item" onClick={() => dispatch({type: 'delete-item'})}><img src="images/icon-delete.svg" alt=""/></button>
                             </div>
                             <button className="btn__checkout" onClick={() => dispatch({type: 'checkout-item'})}>Checkout</button>
                         </div>}
                     </div>
                 </div>
             </dialog>
}