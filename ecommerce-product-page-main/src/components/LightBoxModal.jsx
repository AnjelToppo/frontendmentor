import ProductGallery from "./ProductGallery.jsx";
import {useContext} from "react";
import {CartsContext, CartsDispatchContext} from "../context/CartsContext.jsx";

export default function LightBoxModal() {
    const carts = useContext(CartsContext);
    const dispatch = useContext(CartsDispatchContext);

    return (carts.isLightBoxOpen && <div className='backdrop'>
            <div className="light-box-modal">
                <button className="btn__close-lightbox" onClick={() => dispatch({type: 'close-light-box'})}></button>
                <ProductGallery/>
            </div>
        </div>)

}