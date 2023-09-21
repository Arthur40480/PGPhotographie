import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import croix from "../../../public/croix.svg";
import iconBook from "../../../public/book.svg"
import iconHome from "../../../public/home.svg"
import iconContact from "../../../public/contact.svg"
import iconGallery from "../../../public/gallery.svg"

function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const email = [
        'p', 'i', 'e', 'r', 'r', 'e', 'g', 'i', 'b', 'e', 'r', 't', 
        '.', 
        'p', 'h', 'o', 't', 'o', 'g', 'r', 'a', 'p', 'h', 'i', 'e',
        '@',
        'g', 'm', 'a', 'i', 'l',
        '.', 'c', 'o', 'm'
    ].join('');

    function openOrCloseNav() {
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

    return (
        <>
            <nav className="nav" 
            style={{right: isOpen ? "0px" : "-100%" }}>
                <img className="close-nav" src={croix} onClick={openOrCloseNav} alt="Image de croix"/>
                <ul className="menu-nav">
                    <li>
                        <NavLink exact to="/" activeClassName="active" className="nav-link">Accueil</NavLink>
                        <img src={iconHome} className="icon-nav" alt="Icone de maison pour l'accueil"/>
                    </li>
                    <li>
                        <NavLink to="/category" activeClassName="active" className="nav-link">Galerie</NavLink>
                        <img src={iconGallery} className="icon-nav" alt="Icone de photo pour gallerie"/>
                    </li>
                    <li>
                        <NavLink to="/golden-book" activeClassName="active" className="nav-link">Livre d&rsquo;Or</NavLink>
                        <img src={iconBook} className="icon-nav" alt="Icone de livre pour livre d'or"/>
                    </li>
                    <li>
                        <a href={`mailto:${email}`} className="nav-link">Contact</a>
                        <img src={iconContact} className="icon-nav" alt="Icone de message pour contact"/>
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
