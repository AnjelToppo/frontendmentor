export default function Navigation() {
    return (
        <div className="navigation">
            <a href="/"><img src="/images/logo.svg" alt="company logo"/></a>
            <nav>
                <ul data-tab="">
                    <li><a href="/">Collections</a></li>
                    <li><a href="/">Men</a></li>
                    <li><a href="/">Women</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}