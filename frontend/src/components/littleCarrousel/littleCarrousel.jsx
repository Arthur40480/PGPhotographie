import "./littleCarrousel.css";
import PropTypes from 'prop-types';

function LittleCarrousel({ data, activeImageId, onThumbnailClick }) {

    const currentIndex = data.findIndex((image) => image.id === activeImageId);
    const littleCarrouselImages = [];

    for (let i = 0; i < 5; i++) {   // Boucle créer le tableau des 5 photos pour le petit carrousel, à partir de la photo actuelle
        const index = (currentIndex + i) % data.length; 
        littleCarrouselImages.push(data[index]);
    }

    return (
        <>
            <div className="thumbnail-carrousel">
                {littleCarrouselImages.map((image, index) => (
                    <div 
                    className={`thumbnail-container ${index === 0 ? 'current-thumbnail' : ''}`}
                    key={image.id}
                    onClick={() => {onThumbnailClick(image.id);}}>
                        <img src={image.url} alt={`Photo miniature: ${image.legend}`} />
                    </div>
                ))}
            </div>
        </>
    )
}

LittleCarrousel.propTypes = {
    data: PropTypes.array,
    activeImageId: PropTypes.number,
    onThumbnailClick: PropTypes.func.isRequired
}

export default LittleCarrousel;
