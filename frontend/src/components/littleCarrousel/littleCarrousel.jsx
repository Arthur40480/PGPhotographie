import "./littleCarrousel.css";
import PropTypes from 'prop-types';

function LittleCarrousel({ data, activeImageId }) {

    const currentIndex = data.findIndex((image) => image.id === activeImageId);

    const littleCarrouselImages = [];

    for (let i = 0; i < 5; i++) {
        const index = (currentIndex + i) % data.length; 
        littleCarrouselImages.push(data[index]);
    }

    return (
        <>
            <div>
                {littleCarrouselImages.map((image) => (
                    <img key={image.id} src={image.url} alt={image.legend} />
                ))}
            </div>
        </>
    )
}

LittleCarrousel.propTypes = {
    data: PropTypes.array,
    activeImageId: PropTypes.number
}

export default LittleCarrousel;
