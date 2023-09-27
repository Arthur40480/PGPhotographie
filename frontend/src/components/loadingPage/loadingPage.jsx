import "./loadingPage.css";
import { useState, useEffect } from "react";

function LoadingPage() {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if(progress < 100) {
                setProgress(progress + 1);
            }
        }, 30);

        return () => {
            clearInterval(interval);
        };
    }, [progress]);
    
    return (
        <>
            <div className="loader">
                <div className="loader-bar">
                    <div className="loader-fill"></div>
                </div>
                <div className="loader-percent"></div>
            </div>
        </>
    )
}

export default LoadingPage;
