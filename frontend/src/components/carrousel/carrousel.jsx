import "./carrousel.css";
import buttonClose from "../../../public/close.svg";
import buttonNext from "../../../public/nextCarrousel.svg"
import { useState, useRef } from "react";
import PropTypes from 'prop-types';

function Carrousel({ onClose, data, selectedImg }) {

    // -- Déclaration de state --//
    const [isImageTransitioning, setImageTransitioning] = useState(false);
    const [currentImageId, setCurrentImageId] = useState(selectedImg);
    const [currentIndex, setCurrentIndex] = useState(
        data.findIndex((image) => image.id === selectedImg)
    );
    const touchStartX = useRef(null);
    
    const selectedData = data[currentIndex];

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };
    
    const handleTouchEnd = (e) => {
        if (touchStartX.current - e.changedTouches[0].clientX > 50) {
            handleNextImage();
        } else if (e.changedTouches[0].clientX - touchStartX.current > 50) {
            handlePreviousImage();
        }
        touchStartX.current = null;
    };
    
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
    
    /**
    * Fonction pour empêcher le click droit
    * @param {event} event 
    */
    function handleRightClick(event) {
        event.preventDefault();
    } 

    return (
        <>
            <div 
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onContextMenu={handleRightClick}
                    className="popup-container"
            >
                <img src={buttonClose} className="button-close-popup" onClick={onClose} alt="Button pour fermer le carrousel" />
                <p className="paging">{currentIndex + 1}/{data.length}</p>
                <div className="carrousel-container"> 
                    <img src={buttonNext} className="button-arrow-carrousel previous" onClick={handlePreviousImage} alt="Boutton pour aller à la photo prècedente" />
                    <div className="photo-carrousel-container"> 
                        <img src={selectedData.url} className={`photo-carrousel ${isImageTransitioning ? "transitioning" : ""}`} alt={`Photo ${selectedData.legend}`} />
                    </div>
                    <img src={buttonNext} className="button-arrow-carrousel next" onClick={handleNextImage} alt="Boutton pour aller à la photo suivante" />
                </div>
                <div className="arrow-mobile-container">
                    <img src={buttonNext} className="button-arrow-mobile previous mobile" onClick={handlePreviousImage} alt="Boutton pour aller à la photo prècedente" />
                    <img src={buttonNext} className="button-arrow-mobile next " onClick={handleNextImage} alt="Boutton pour aller à la photo suivante" />
                </div>
                <div className="legend-container">
                    <p className="legend">{selectedData.legend}</p>
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
