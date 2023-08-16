import "./carrousel.css";
import buttonClose from "../../../public/croix.svg";
import buttonNext from "../../../public/nextcarrousel.svg"
import { useState } from "react";

function Carrousel({ onClose, data, selectedImg }) {
    
    const [ imgCurrent, setImgCurrent ] = useState(selectedImg);
    const selectedData = data[imgCurrent];
    const lengthData = data.length;
    console.log(selectedData);

    function ShowNextImg() {
        setImgCurrent(imgCurrent === lengthData - 1 ? 0 : imgCurrent + 1)
    };

    function ShowPreviousImg() {
        setImgCurrent(imgCurrent ===  0 ? lengthData - 1 : imgCurrent - 1)
    };

    return (
        <>
            <div className="popup-container">
                <img src={buttonClose} className="button-close-popup" onClick={onClose} alt="Button pour fermer le carrousel" />
                <div className="carrousel-container">
                    <img src={buttonNext} className="button-arrow-carrousel previous" onClick={ShowPreviousImg} alt="Boutton pour parcourir les photos" />
                    <div>
                        <img src={selectedData.url} className="photo-carrousel" alt={`Photo ${selectedData.legend}`} />
                    </div>
                    <img src={buttonNext} className="button-arrow-carrousel next" onClick={ShowNextImg} alt="Boutton pour parcourir les photos" />
                </div>
                <div className="legend-container">
                    <p className="legend">{selectedData.legend}</p>
                </div>
            </div>
        </>
    )
};

export default Carrousel;
