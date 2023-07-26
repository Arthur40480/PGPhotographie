import "./news.css";
import axios from "axios";
import { useState, useEffect } from "react";

function News() {

    const [error, setError] = useState(null)
    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get("http://localhost:1337/api/events")
        .then(( { data } ) => setEvents(data.data))
        .catch((error) => setError(error))
    }, []);
    
        return (
            <section className="news-section">
                <h2 className="news-section-title">Actualités</h2>
                {events.map(( {id, attributes }) => (
                    <div key={id} className="news-content">
                        <h3 className="news-content-title">{attributes.name}</h3>
                        <p><span>Lieu:</span> {attributes.place}</p>
                        <p><span>Dates:</span> {attributes.start_date} / {attributes.end_date}</p>
                        <p className="news-description">{attributes.description}</p>
                    </div>
                ))}
            </section>
        )
};

export default News;
