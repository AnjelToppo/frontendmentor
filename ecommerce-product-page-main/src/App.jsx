import Header from "./components/Header.jsx";
import Content from "./components/Product.jsx";
import {useReducer} from "react";
import {CartsContext, CartsDispatchContext} from "./context/CartsContext.jsx";

function App() {
    const [carts, dispatch] = useReducer(cartsReducer, initialCarts)

    return (<CartsContext.Provider value={carts}>
            <CartsDispatchContext.Provider value={dispatch}>
                <Header/>
                <Content/>
            </CartsDispatchContext.Provider>
        </CartsContext.Provider>)
}

export default App

function cartsReducer(carts, action) {
    switch (action.type) {
        case 'cart-modal-toggle':
            return {...carts, isCartOpen: !carts.isCartOpen};
        case 'increase-item-counter':
            return {...carts, itemCounter: carts.itemCounter + 1};
        case 'decrease-item-counter':
            if (carts.itemCounter === 0) {
                return {...carts}
            }
            return {...carts, itemCounter: carts.itemCounter - 1};
        case 'add-to-cart':
            return {...carts, itemQuantity: action.payload};
        case 'delete-item':
            return {...carts, itemQuantity: 0};
        case 'checkout-item':
            return {...carts, itemQuantity: 0, itemCounter: 0, isCartOpen: false};
    }

}

const initialCarts = {
    isCartOpen: false,
    itemQuantity: 0,
    itemCounter: 0,
    itemPrice: 125
};