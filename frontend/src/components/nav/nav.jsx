import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import croix from "../../../public/croix.svg";

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
    };

    return (
        <>
            <nav className="nav" 
            style={{right: isOpen ? "0px" : "-100%" }}>
                <img className="close-nav" src={croix} onClick={openOrCloseNav} alt="Image de croix"/>

                <ul className="menu-nav">
                    <li><NavLink exact to="/" activeClassName="active" className="nav-link">Accueil</NavLink></li>
                    <li><NavLink to="/galerie" activeClassName="active" className="nav-link">Galerie</NavLink></li>
                    <li><NavLink to="/liens-utiles" activeClassName="active" className="nav-link">Liens utiles</NavLink></li>
                    <li><a href={`mailto:${email}`} className="nav-link">Contact</a></li>                    
                </ul>
            </nav>
            <div onClick={openOrCloseNav} className="trigger-nav"
            style={{display: isOpen ? "none" : "flex"}}>
                <div className="element-nav">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    )
};

export default Nav;
