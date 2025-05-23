import Header from "./components/Header.jsx";
import Content from "./components/Product.jsx";
import {useReducer} from "react";
import {CartsContext, CartsDispatchContext} from "./context/CartsContext.jsx";
import LightBoxModal from "./components/LightBoxModal.jsx";
import MenuModal from "./components/MenuModal.jsx";

function App() {
    const [carts, dispatch] = useReducer(cartsReducer, initialCarts)

    return (<CartsContext.Provider value={carts}>
            <CartsDispatchContext.Provider value={dispatch}>
                <Header/>
                <Content/>
                {carts.isLightBoxOpen && <LightBoxModal/>}
                {carts.isMenuOpen && <MenuModal/>}
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
        case 'open-light-box':
            return {...carts, isLightBoxOpen: true};
        case 'close-light-box':
            return {...carts, isLightBoxOpen: false};
        case 'open-menu':
            return {...carts, isMenuOpen: true};
        case 'close-menu':
            return {...carts, isMenuOpen: false};
    }

}

const initialCarts = {
    isCartOpen: false,
    itemQuantity: 0,
    itemCounter: 0,
    itemPrice: 125,
    isLightBoxOpen: false,
    isMenuOpen: false,
};