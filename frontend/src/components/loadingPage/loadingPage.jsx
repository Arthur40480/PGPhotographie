import "./loadingPage.css";
import { useState, useEffect } from "react";
import camera from "../../../public/camera.svg";
import battery from "../../../public/battery.svg";
import flash from "../../../public/flash.svg";

function LoadingPage() {
    
    // -- Déclaration de state --//
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if(progress < 100) {
                setProgress(progress + 1);
            }
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, [progress]);
    
    return (
        <>
            <div className="loader">
                <img src={camera} alt="Image d'un appareil photo'" className="loader-camera-icon" />
                <div className="loader-animation-container">
                    <img src={battery} alt="Image de batterie" className="loader-battery-icon" />
                    <div className="loader-bar">
                        <div className="loader-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                    <img src={flash} alt="Image de flash" className="loader-flash-icon" />
                </div>
                <p className="loader-percent">{progress}%</p>
                <p className="loader-legend">Chargement ...</p>
            </div>
        </>
    )
}

export default LoadingPage;
