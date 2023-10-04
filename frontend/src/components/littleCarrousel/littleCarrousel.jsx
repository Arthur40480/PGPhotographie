import "./littleCarrousel.css";
import PropTypes from 'prop-types';

function LittleCarrousel({ data, activeImageId, onThumbnailClick }) {

    const currentIndex = data.findIndex((image) => image.id === activeImageId);

    const littleCarrouselImages = [];

    for (let i = 0; i < 5; i++) {
        const index = (currentIndex + i) % data.length; 
        littleCarrouselImages.push(data[index]);
    }

    console.log(littleCarrouselImages)
    console.log(data)
    console.log(currentIndex)
    console.log(activeImageId)

    return (
        <>
            <div className="thumbnail-carrousel">
                {littleCarrouselImages.map((image, index) => (
                    <div 
                    className={`thumbnail-container ${index === 0 ? 'current-thumbnail' : ''}`}
                    key={image.id}
                    onClick={() => {
                        // Appel de la fonction onThumbnailClick avec l'ID de l'image cliquée
                        onThumbnailClick(image.id);
                        }}>
                        <img src={image.url} alt={image.legend} />
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
