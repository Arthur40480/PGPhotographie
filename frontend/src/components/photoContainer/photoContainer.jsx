import "./photoContainer.css";
import Carrousel from "../carrousel/carrousel";
import loupe from "../../../public/loupe.svg";
import { useState } from "react";
import PropTypes from 'prop-types';

function PhotoContainer({ data }) {

    // -- Déclaration de state --//
    const [ carrouselOpen, setCarrouselOpen ] = useState(false);
    const [ selectedImg, setSelectedImg ] = useState(null);
    const [ hoveredImgIndex, setHoveredImgIndex ] = useState(null);
    
    /**
    * Fonction pour empêcher le click droit
    * @param {event} event 
    */
    function handleRightClick(event) {
        event.preventDefault();
    }

    /**
     * Fonction pour ouvrir le carrousel, et passer l'index de notre photo séléctionnée au state selectedImg
     * @param {number} index 
     */
    function openCarrousel(index) {
        setSelectedImg(index);
        setCarrouselOpen(true);
        document.body.style.overflow = 'hidden';   
    }
    
    function closeCarrousel() { // Fonction pour fermer le carrousel
        setSelectedImg(null);
        setCarrouselOpen(false);
        document.body.style.overflow = 'auto';
    }

    return (
        <>
            <section className="picture-section" onContextMenu={handleRightClick}>
                {data && data.length > 0 ? (
                    data.map((photo, index) => (
                        <div 
                            key={index} 
                            className="picture-card" 
                            onClick={() => openCarrousel(photo.id)}
                            onMouseEnter={() => setHoveredImgIndex(index)}
                            onMouseLeave={() => setHoveredImgIndex(null)}
                        >
                            <img src={photo.url} className={`picture-img ${hoveredImgIndex === index ? "img-flown-over" : ""}`} alt={`Photographie: ${photo.legend}`}/>
                            <img src={loupe} className={`icon-img ${hoveredImgIndex === index ? "icon-flown-over" : ""}`} alt={`Image d'une loupe ${index}`} />
                        </div>
                    ))
                ) : (
                    <p className="error-msg-picture-section">{data ? "Aucune photo pour le moment" : "Erreur de chargement"}</p>
                )}

                {carrouselOpen && (
                    <Carrousel onClose={closeCarrousel} data={data} selectedImg={selectedImg}/>
                )}
            </section>
        </>
    )
}

PhotoContainer.propTypes = {
    data: PropTypes.array
}

export default PhotoContainer;
