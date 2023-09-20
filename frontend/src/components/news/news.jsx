import "./news.css";
import axios from "axios";
import { useState, useEffect } from "react";
import separator from "../../../public/separateur.svg";
import http from "../../services/http.js";

function News() {

    const [error, setError] = useState(null)
    const [events, setEvents] = useState([])

    useEffect(() => {
        http.get("api/events")
        .then(( { data } ) => setEvents(data.data))
        .catch((error) => setError(error))
    }, []);
    
        return (
            <section className="news-section">
                <div className="news-container-title">
                    <h2 className="news-section-title"><span>Actualités</span></h2>
                </div>
                { error ? (
                    <p className="news-error">Une erreur est survenue !</p>
                ) : ( events.map(( { id, attributes }) => (
                        <div key={id} className="news-content">
                            <h3 className="news-content-title">{attributes.name}</h3>
                            <p><span>Lieu:</span> {attributes.place}</p>
                            <p><span>Dates:</span> {attributes.start_date} / {attributes.end_date}</p>
                            <p className="news-description">{attributes.description}</p>
                            <div className="separator-news-container">
                                <img className="separator" src={separator} alt="séparateur d'actualités" />
                            </div>
                        </div>
                )))}
            </section>
        )
};

export default News;
