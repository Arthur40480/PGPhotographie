import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/Logo3.png";
import "./footer.css";
import { useEffect } from 'react';


function Footer() {

    const location = useLocation();
    const email = [
        'p', 'i', 'e', 'r', 'r', 'e', 'g', 'i', 'b', 'e', 'r', 't', 
        '.', 
        'p', 'h', 'o', 't', 'o', 'g', 'r', 'a', 'p', 'h', 'i', 'e',
        '@',
        'g', 'm', 'a', 'i', 'l',
        '.', 'c', 'o', 'm'
    ].join('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <footer>
            <scrollToTop />
            <img className="footer-logo" src={logo} alt="Troisième logo du site" />
            <ul className="footer-list">
                <li><NavLink exact to="/" className="footer-link">Accueil</NavLink></li>
                <li><NavLink to="/category" className="footer-link">Galerie</NavLink></li>
                <li><NavLink to="/golden-book" className="footer-link">Livre d&lsquo;Or</NavLink></li>
                <a href={`mailto:${email}`} className="footer-link">Contact</a>
            </ul>
            <p className="copyright">Copyright 2023 Pierre Gibert Photographie.</p>
            <p className="copyright end">Tous droits réservés.</p>
        </footer>
    )
}

export default Footer;
