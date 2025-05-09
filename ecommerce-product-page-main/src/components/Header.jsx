import Navigation from "./Navigation.jsx";
import CartProfile from "./CartProfile.jsx";
import CartModal from "./CartModal.jsx";

export default function Header() {
    return (
        <header className="header">
            <Navigation />
            <CartProfile />
            <CartModal />
        </header>
    )
}