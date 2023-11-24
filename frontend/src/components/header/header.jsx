import "./header.css";
import Banner from "../banner/banner";
import Nav from "../nav/nav";


function Header() {

    /**
    * Fonction pour empêcher le click droit
    * @param {event} event 
    */
    function handleRightClick(event) {
        event.preventDefault();
    }

    return (
        <>
            <header className="header" onContextMenu={handleRightClick}>
                <Banner />
                <Nav />
            </header>
        </>
    )
}

export default Header;
