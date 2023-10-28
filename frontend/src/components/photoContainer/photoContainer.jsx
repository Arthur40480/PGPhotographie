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

    // Vérification si data est vide ou s'il y a une erreur
    if (!data || data instanceof Error) {
        if (!data) {
            return <div>Pas de photo pour l'instant</div>;
        } else {
            return <div>Une erreur s'est produite</div>;
        }
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
            <section className="picture-section">
                {data.map((photo, index) => (
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
                ))}

                { carrouselOpen && (
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
