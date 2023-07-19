import { NavLink } from "react-router-dom"
import logo from "../../assets/Logo3.png"
import "./footer.css"

function Footer() {
    return (
        <footer>
            <img className="footer-logo" src={logo} alt="Troisième logo du site" />
            <ul className="footer-list">
                <li><a href="">Accueil</a></li>
                <li><a href="">Galerie</a></li>
                <li><a href="">Liens utiles</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Mentions légales</a></li>
            </ul>
            <p className="copyright">Copyright 2023 Pierre Gibert Photographie. Tous droits réservés.</p>
        </footer>
    )
}

export default Footer;
