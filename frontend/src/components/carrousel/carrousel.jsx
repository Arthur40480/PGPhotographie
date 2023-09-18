import "./carrousel.css";
import buttonClose from "../../../public/croix.svg";
import buttonNext from "../../../public/nextcarrousel.svg"
import { useState } from "react";

function Carrousel({ onClose, data, selectedImg }) {
    
    const [ imgCurrent, setImgCurrent ] = useState(selectedImg);
    const [isImageTransitioning, setImageTransitioning] = useState(false);
    console.log(imgCurrent);

    const selectedData = data[imgCurrent];
    const lengthData = data.length;

    function ShowNextImg() {
        setImageTransitioning(true);
        setTimeout(() => {
            setImgCurrent(imgCurrent === lengthData - 1 ? 0 : imgCurrent + 1);
            setImageTransitioning(false);
        }, 300);
    }
    
    function ShowPreviousImg() {
        setImageTransitioning(true);
        setTimeout(() => {
            setImgCurrent(imgCurrent === 0 ? lengthData - 1 : imgCurrent - 1);
            setImageTransitioning(false);
        }, 300); 
    }

    const handleImageClick = (index) => {
        setImageTransitioning(true);
        setTimeout(() => {
            // Calculez le nouvel indice en ajoutant simplement l'indice de la miniature cliquée à imgCurrent.
            let newIndex = imgCurrent + index;

             // Assurez-vous que le nouvel indice reste dans la plage valide de 0 à lengthData - 1.
            if (newIndex < 0) {
                newIndex += lengthData;
            } else if (newIndex >= lengthData) {
                newIndex -= lengthData;
            }
            setImgCurrent(newIndex);
            setImageTransitioning(false);
        }, 300);
    };

    return (
        <>
            <div className="popup-container">
                <img src={buttonClose} className="button-close-popup" onClick={onClose} alt="Button pour fermer le carrousel" />
                <p className="paging">{imgCurrent + 1}/{data.length}</p>
                <div className="carrousel-container"> 
                    <img src={selectedData.url} className={`photo-carrousel ${isImageTransitioning ? "transitioning" : ""}`} alt={`Photo ${selectedData.legend}`} />
                </div>
                <div className="legend-container">
                    <p className="legend">{selectedData.legend}</p>
                </div>
                <div className="thumbnail-carrousel">
                    <img src={buttonNext} className="button-arrow-carrousel previous" onClick={ShowPreviousImg} alt="Boutton pour parcourir les photos" />
                {lengthData >= 5 && (
                    data.slice(imgCurrent, imgCurrent + 5).map((photo, index) => (
                        <div 
                        className={`thumbnail-container ${index === 0 ? 'current-thumbnail' : ''}`}
                        key={index}
                        onClick={() => handleImageClick(index)}>
                            <img src={photo.url} alt={photo.legend} />
                        </div>
                    ))
                )}
                {imgCurrent + 5 > lengthData && lengthData >= 5 && (
                    data.slice(0, imgCurrent + 5 - lengthData).map((photo, index) => (
                        <div className="thumbnail-container" key={index} onClick={() => handleImageClick(index)}>
                            <img src={photo.url} alt={photo.legend} />
                        </div>
                    ))
                )}
                {lengthData < 5 && (
                    data.slice(imgCurrent, lengthData).map((photo, index) => (
                        <div className={`thumbnail-container ${index === 0 ? 'current-thumbnail' : ''}`} key={index} onClick={() => handleImageClick(index)}>
                            <img src={photo.url} alt={photo.legend}/>
                        </div>
                    ))
                )}
                {imgCurrent + lengthData > lengthData && lengthData < 5 && (
                    data.slice(0, imgCurrent ).map((photo, index) => (
                        <div className="thumbnail-container" key={index} onClick={() => handleImageClick(index)}>
                            <img src={photo.url} alt={photo.legend}/>
                        </div>
                    ))
                )}
                    <img src={buttonNext} className="button-arrow-carrousel next" onClick={ShowNextImg} alt="Boutton pour parcourir les photos" />
                </div>
            </div>
        </>
    )
};

export default Carrousel;
