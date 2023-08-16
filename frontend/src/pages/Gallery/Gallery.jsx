import "./gallery.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PhotoContainer from "../../components/photoContainer/photoContainer.jsx";

function Gallery() {
    
    const [ photoData, setPhotoData ] = useState([]);
    const [ photoInfo, setPhotoInfo ] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        axios.get("http://localhost:1337/api/subcategories?populate[0]=photos.src")
            .then(({data}) => setPhotoData(data.data[id - 1].attributes.photos.data))
    }, []);

    useEffect(() => {
        if(photoData.length > 0) {
            const photoObject = extractPhotoData(photoData);
            setPhotoInfo(photoObject);
        }
    }, [photoData]);

    function extractPhotoData(array) {
        const photoObject = array.map(photo => ({
            url: `http://localhost:1337${photo.attributes.src.data[0].attributes.url}`,
            legend: photo.attributes.Legend
        }));
        return photoObject;
    }

    return (
        <>
            <PhotoContainer data={photoInfo} />
        </>
    )
}
export default Gallery;
