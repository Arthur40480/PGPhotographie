import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/Logo3.png";
import "./footer.css";
import { useEffect } from 'react';


function Footer() {

    // -- Déclaration de state --//
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
            <img className="footer-logo" src={logo} alt="Logo du pied de page" />
            <ul className="footer-list">
                <li><NavLink exact to="/" className="footer-link">Accueil</NavLink></li>
                <li><a href="/category#galerie" className="footer-link">Galerie</a></li>
                <li><a href="/golden-book#golden-book" className="footer-link">Livre d&lsquo;Or</a></li>
                <li><a href="/useful-link#useful-link" className="footer-link">Liens utiles</a></li>
                <li><a href={`mailto:${email}`} className="footer-link">Contact</a></li>
                <li><a href="/legal-notice#legal-notice" className="footer-link">Mentions légales</a></li>
            </ul>
            <p className="copyright">Copyright 2023 Pierre Gibert Photographie.</p>
            <p className="copyright end">Tous droits réservés.</p>
        </footer>
    )
}

export default Footer;
