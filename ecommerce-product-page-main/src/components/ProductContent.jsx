import {useContext} from "react";
import {CartsContext, CartsDispatchContext} from "../context/CartsContext.jsx";

export default function ProductContent() {
    const carts = useContext(CartsContext);
    const dispatch = useContext(CartsDispatchContext);

    return (
        <div className="product__content">
            <div className="product__header">
                <span className="company">Sneaker Company</span>
                <h1 className="product__name">Fall Limited Edition Sneakers</h1>
            </div>
            <p className="product__description">
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="product__price-container">
                <div className="product__prices">
                    <span className="product__current-price">$125.00</span>
                    <span className="product__actual-price">$250.00</span>
                </div>
                <span className="product__discount">50%</span>
            </div>
            <div className="cta">
                <div className="actions__container">
                    <button className="btn__decrease-quantity" onClick={() => dispatch({type: 'decrease-item-counter'})}></button>
                    <span className="product__add-quantity">{carts.itemCounter}</span>
                    <button className="btn__increase-quantity" onClick={() => dispatch({type: 'increase-item-counter'})}></button>
                </div>
                <button className="btn__add-cart" onClick={() => dispatch({type: 'add-to-cart', payload: carts.itemCounter})}><span></span>Add to cart</button>
            </div>
        </div>
    )
}