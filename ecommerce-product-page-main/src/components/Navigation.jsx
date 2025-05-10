import {useContext, useRef} from "react";
import {CartsDispatchContext} from "../context/CartsContext.jsx";

export default function Navigation() {
    const tabRef = useRef(null);
    const dispatch = useContext(CartsDispatchContext);

    function handleTabClick(evt, tab) {
        evt.preventDefault();
        tabRef.current.dataset.tab = tab;
    }

    return (<div className="navigation">
            <a href="/"><img src="images/logo.svg" alt="company logo"/></a>
            <nav>
                <ul data-tab="" ref={tabRef}>
                    <li><a href="/" onClick={(e) => handleTabClick(e, 'collections')}>Collections</a></li>
                    <li><a href="/" onClick={(e) => handleTabClick(e, 'men')}>Men</a></li>
                    <li><a href="/" onClick={(e) => handleTabClick(e, 'women')}>Women</a></li>
                    <li><a href="/" onClick={(e) => handleTabClick(e, 'about')}>About</a></li>
                    <li><a href="/" onClick={(e) => handleTabClick(e, 'contact')}>Contact</a></li>
                </ul>
            </nav>
            <button className="btn__menu" onClick={() => dispatch({type: 'open-menu'})}><img src="images/icon-menu.svg" alt=""/></button>
        </div>)
}