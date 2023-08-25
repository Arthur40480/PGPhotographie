import "./photoContainer.css";
import Carrousel from "../carrousel/carrousel";
import { useState, useEffect } from "react";
import loupe from "../../../public/loupe.svg";

function PhotoContainer({ data }) {

    const [ carrouselOpen, setCarrouselOpen ] = useState(false);
    const [ selectedImg, setSelectedImg ] = useState(null);
    const [ hoveredImgIndex, setHoveredImgIndex ] = useState(null);

    function openCarrousel(index) {
        setSelectedImg(index);
        setCarrouselOpen(true);
        document.body.style.overflow = 'hidden';   
    }
    
    function closeCarrousel() {
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
                        onClick={() => openCarrousel(index)}
                        onMouseEnter={() => setHoveredImgIndex(index)}
                        onMouseLeave={() => setHoveredImgIndex(null)}
                    >
                        <img src={photo.url} className={`picture-img ${hoveredImgIndex === index ? "img-flown-over" : ""}`} alt="Photographie"/>
                        <img src={loupe} className={`icon-img ${hoveredImgIndex === index ? "icon-flown-over" : ""}`} alt="Image d'une loupe" />
                    </div>
                ))}

                { carrouselOpen && (
                    <Carrousel onClose={closeCarrousel} data={data} selectedImg={selectedImg}/>
                )}
            </section>
        </>
    )
};

export default PhotoContainer;
