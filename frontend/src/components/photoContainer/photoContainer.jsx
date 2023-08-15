import "./photoContainer.css";

function PhotoContainer({ data }) {

    return (
        <>
            <section className="picture-section">
                {data.map((photo, index) => (
                    <div key={index} className="picture-card">
                        <img src={photo.url} className="picture-img"/>
                    </div>
                ))}
            </section>
        </>
    )
};

export default PhotoContainer;
