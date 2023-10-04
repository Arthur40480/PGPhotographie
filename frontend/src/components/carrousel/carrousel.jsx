import "./carrousel.css";
import buttonClose from "../../../public/close.svg";
import buttonNext from "../../../public/nextCarrousel.svg"
import { useState } from "react";
import PropTypes from 'prop-types';
import LittleCarrousel from "../littleCarrousel/littleCarrousel.jsx";

function Carrousel({ onClose, data, selectedImg }) {

    // -- Déclaration de state --//
    const [isImageTransitioning, setImageTransitioning] = useState(false);
    const [currentImageId, setCurrentImageId] = useState(selectedImg);
    const [currentIndex, setCurrentIndex] = useState(
        data.findIndex((image) => image.id === selectedImg)
    );
    
    const selectedData = data[currentIndex];
    
    const handleNextImage = () => { // Fonction pour aller à l'image suivante
        setImageTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === data.length - 1 ? 0 : prevIndex + 1
            );
            setCurrentImageId((prevImageId) => {
                const currentIndex = data.findIndex((image) => image.id === prevImageId);
                return currentIndex === data.length - 1 ? data[0].id : data[currentIndex + 1].id;
                });
            setImageTransitioning(false);
        }, 300);
    };
    
    const handlePreviousImage = () => { // Fonction pour aller à l'image précédente
        setImageTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? data.length - 1 : prevIndex - 1
            );
            setCurrentImageId((prevImageId) => {
                const currentIndex = data.findIndex((image) => image.id === prevImageId);
                return currentIndex === 0 ? data[data.length - 1].id : data[currentIndex - 1].id;
                });
            setImageTransitioning(false);
        }, 300);
    };

    const handleThumbnailClick = (newImageId) => {  // Fonction pour aller à l'image sélectionnée (Depuis le petit carrousel)
        const newIndex = data.findIndex((image) => image.id === newImageId);
        if (newIndex !== -1) {
            setCurrentIndex(newIndex);
        }
        setCurrentImageId(newImageId);
    };
    
    return (
        <>
            <div className="popup-container">
                <img src={buttonClose} className="button-close-popup" onClick={onClose} alt="Button pour fermer le carrousel" />
                <p className="paging">{currentIndex + 1}/{data.length}</p>
                <div className="carrousel-container"> 
                    <img src={selectedData.url} className={`photo-carrousel ${isImageTransitioning ? "transitioning" : ""}`} alt={`Photo ${selectedData.legend}`} />
                </div>
                <div className="legend-container">
                    <p className="legend">{selectedData.legend}</p>
                </div>
                <div className="thumbnail-carrousel">
                    <img src={buttonNext} className="button-arrow-carrousel previous" onClick={handlePreviousImage} alt="Boutton pour parcourir les photos" />
                    <LittleCarrousel data={data} activeImageId={currentImageId} onThumbnailClick={handleThumbnailClick}/>
                    <img src={buttonNext} className="button-arrow-carrousel next" onClick={handleNextImage} alt="Boutton pour parcourir les photos" />
                </div>
            </div>
        </>
    )
}

Carrousel.propTypes = {
    onClose: PropTypes.func,
    data: PropTypes.array,
    selectedImg: PropTypes.number
}

export default Carrousel;
