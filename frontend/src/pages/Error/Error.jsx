import "./Error.css";
import { NavLink } from "react-router-dom";
import error from "../../../public/error.svg";

function Error() {
    return (
        <main className="error-main">
            <section className="error-section">
                <h1 className="error-title">Erreur 404 - Page non trouvée</h1>
                <img src={error} className="error-icone" alt="Icône d'une erreur 404" />
                <p className="error-content">Désoler, mais la page que vous recherchez n&lsquo;existe pas.</p>
                <p className="error-return">Retourner à la page d&lsquo;accueil : </p>
                <NavLink exact to="/" activeClassName="active" className="error-home-link">ICI</NavLink>
            </section>
        </main>
    )
}

export default Error;
