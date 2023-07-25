import "./header.css"
import Banner from "../banner/banner"
import Nav from "../nav/nav"


function Header() {
    return (
        <>
            <header className="header">
                <Banner />
                <Nav />
            </header>
        </>
    )
}

export default Header;
