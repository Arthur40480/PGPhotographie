import "./carrousel.css";
import buttonClose from "../../../public/close.svg";
import buttonNext from "../../../public/nextCarrousel.svg"
import { useState } from "react";
import PropTypes from 'prop-types';

function Carrousel({ onClose, data, selectedImg }) {

    const [isImageTransitioning, setImageTransitioning] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(
        data.findIndex((image) => image.id === selectedImg)
    );
    
    const handleNextImage = () => {
        setImageTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
            );
            setImageTransitioning(false);
        }, 300);
    };
    
    const handlePreviousImage = () => {
        setImageTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
            );
            setImageTransitioning(false);
        }, 300);

    };
    
    const selectedData = data[currentIndex];

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
