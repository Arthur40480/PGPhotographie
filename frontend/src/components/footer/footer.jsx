import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/Logo3.png";
import "./footer.css";
import { useEffect } from 'react';


function Footer() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <footer>
            <scrollToTop />
            <img className="footer-logo" src={logo} alt="Troisième logo du site" />
            <ul className="footer-list">
                <li><NavLink exact to="/" className="footer-link">Accueil</NavLink></li>
                <li><NavLink to="/galerie" className="footer-link">Galerie</NavLink></li>
                <li><NavLink to="/liens-utiles" className="footer-link">Liens utiles</NavLink></li>
                <a href="mailto:thomaspc@hotmail.fr" className="footer-link">Contact</a>
                <li><NavLink to="/mentions-legales" className="footer-link">Mentions légales</NavLink></li>
            </ul>
            <p className="copyright">Copyright 2023 Pierre Gibert Photographie. Tous droits réservés.</p>
        </footer>
    )
};

export default Footer;
