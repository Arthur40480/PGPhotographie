import "./gallery.css";
import http from "./../../services/http.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PhotoContainer from "../../components/photoContainer/photoContainer.jsx";
import LoadingPage from "../../components/loadingPage/loadingPage";

function Gallery() {
    const [ photoData, setPhotoData ] = useState([]);
    const [ photoInfo, setPhotoInfo ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const { id } = useParams();
    const categoryTitle = new URLSearchParams(window.location.search).get("categoryTitle");

    useEffect(() => {
        http.get("/api/subcategories?populate[0]=photos.src")
            .then(({data}) => {
                setPhotoData(data.data[id - 1].attributes.photos.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Erreur lors du chargement des données:', error);
            });
        }, [id]);

    useEffect(() => {
        if(photoData.length > 0) {
            const photoObject = extractPhotoData(photoData);
            setPhotoInfo(photoObject);
        }
    }, [photoData]);

    function extractPhotoData(array) {
        const photoObject = array.map(photo => ({
            url: import.meta.env.VITE_REACT_APP_URL + photo.attributes.src.data[0].attributes.url,
            legend: photo.attributes.Legend,
            id: photo.id
        }));
        console.log(photoObject);
        return photoObject;
    }

    return (
        <>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <main className="gallery-main">
                    <div className="container-gallery-title">
                        <h1 className="gallery-title"><span>{categoryTitle}</span></h1>
                    </div>
                    <PhotoContainer data={photoInfo} />
                </main>
            )}          
        </>
    )
}
export default Gallery;
