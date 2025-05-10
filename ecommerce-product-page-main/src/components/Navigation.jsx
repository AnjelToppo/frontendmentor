import {useRef} from "react";

export default function Navigation() {
    const tabRef = useRef(null);

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
        </div>)
}