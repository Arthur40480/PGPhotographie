import "./linkContainer.css";
import http from "./../../services/http.js";
import { useState, useEffect } from "react";
import separator from "../../../public/separateur.svg";


function LinkContainer() {

    // -- Déclaration de state --//
    const [error, setError] = useState(null)
    const [links, setLinks] = useState([])
    
    useEffect(() => {   // Appel API en méthode "GET" pour récupérer les liens
        http.get("/api/links")
        .then(( { data } ) => setLinks(data.data))
        .catch((error) => setError(error))
    }, []);

    return (
        <section className="link-section">
            <div className="link-container-title">
                <h2 className="link-section-title"><span>Liens</span></h2>
            </div>
            { error ? (
                <p className="link-error">Une erreur est survenue !</p>
            ) : links.length === 0 ? (
                <p className="link-error">Aucun lien pour le moment !</p>
            ) : ( 
                links.map(( { id, attributes }) => (
                    <div key={id} className="link-content">
                        <h3 className="link-content-title">{attributes.titre}</h3>
                        <p><a href={attributes.url}>rtehrth</a></p> 
                        <p className="link-description">{attributes.description}</p>
                        <div className="separator-link-container">
                            <img className="separator" src={separator} alt="séparateur d'actualités" />
                        </div>
                    </div>
            )))}
        </section>
    )
}

export default LinkContainer;

