import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import croix from "../../../public/close.svg";
import book from "../../../public/book.svg";
import contact from "../../../public/contact.svg";
import gallery from "../../../public/gallery.svg";
import home from "../../../public/home.svg";

function Nav() {

    // -- Déclaration de state --//
    const [isOpen, setIsOpen] = useState(false);

    const email = [
        'p', 'i', 'e', 'r', 'r', 'e', 'g', 'i', 'b', 'e', 'r', 't', 
        '.', 
        'p', 'h', 'o', 't', 'o', 'g', 'r', 'a', 'p', 'h', 'i', 'e',
        '@',
        'g', 'm', 'a', 'i', 'l',
        '.', 'c', 'o', 'm'
    ].join('');

    function openOrCloseNav() { // Fonction pour ouvrir ou fermer la nav
        const navItems = document.querySelectorAll(".menu-nav li");
        setIsOpen(!isOpen);

        navItems.forEach((item) => {
            if(isOpen === false) {
                item.classList.add("li-animation");
            }else {
                item.classList.remove("li-animation");
            }
        });
    }

    function closeNav() {
        setIsOpen(false);
    }

    return (
        <>
            <nav className="nav" 
            style={{right: isOpen ? "0px" : "-100%" }}>
                <img className="close-nav" src={croix} onClick={openOrCloseNav} alt="Image de croix pour fermer le menu de navigation"/>
                <ul className="menu-nav">
                    <li>
                        <NavLink exact to="/" activeClassName="active" className="nav-link" onClick={closeNav}>Accueil</NavLink>
                        <img src={home} className="icone-nav" alt="Icône pour le lien accueil" />
                    </li>
                    <li>
                        <NavLink to="/category" activeClassName="active" className="nav-link" onClick={closeNav}>Galerie</NavLink>
                        <img src={gallery} className="icone-nav" alt="Icône pour le lien galerie" />
                    </li>
                    <li>
                        <NavLink to="/golden-book" activeClassName="active" className="nav-link" onClick={closeNav}>Livre d&lsquo;Or</NavLink>
                        <img src={book} className="icone-nav" alt="Icône pour le lien livre d'or" />
                    </li>
                    <li>
                        <a href={`mailto:${email}`} className="nav-link" onClick={closeNav}>Contact</a>
                        <img src={contact} className="icone-nav" alt="Icône pour le lien contact" />
                    </li>                    
                </ul>
            </nav>
            <div className="black-box" onClick={openOrCloseNav} style={{display: isOpen ? "flex" : "none"}}>
                <span></span>
            </div>
            <div onClick={openOrCloseNav} className="trigger-nav"
            style={{display: isOpen ? "none" : "flex"}}>
                <div className="element-nav">
                    <span className="white-bar"></span>
                    <span className="white-bar"></span>
                    <span className="white-bar"></span>
                </div>
            </div>
        </>
    )
}

export default Nav;
