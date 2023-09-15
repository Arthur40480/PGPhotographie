import "./Error.css";
import { NavLink } from "react-router-dom";

function Error() {
    return (
        <>
            <section className="error-section">
                <h1 className="error-title">Erreur 404 - Page non trouvée</h1>
                <p className="error-content">Désoler, mais la page que vous recherchez n'existe pas.</p>
                <p className="error-return">Retourner à la page d'accueil : </p>
                <NavLink exact to="/" activeClassName="active" className="error-home-link">ICI</NavLink>
            </section>
        </>
    )
}

export default Error;
