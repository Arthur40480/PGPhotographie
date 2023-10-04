import "./Gallery.css";
import http from "./../../services/http.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PhotoContainer from "../../components/photoContainer/photoContainer.jsx";
import LoadingPage from "../../components/loadingPage/loadingPage";

function Gallery() {

    // -- Déclaration de state --//
    const [ photoData, setPhotoData ] = useState([]);
    const [ photoInfo, setPhotoInfo ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    // -- Extraction de l'id via l'URL --//
    const { id } = useParams();
    const categoryTitle = new URLSearchParams(window.location.search).get("categoryTitle");

    useEffect(() => {
        http.get("/api/subcategories?populate[0]=photos.src")   // Appel API en méthode "GET" pour récupérer les photos de la sous-catégorie
            .then(({data}) => {
                setPhotoData(data.data[id - 1].attributes.photos.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Erreur lors du chargement des données:', error);
            });
        }, [id]);

    useEffect(() => {   // On apelle la fonction extractPhotoData
        if(photoData.length > 0) {
            const photoObject = extractPhotoData(photoData);
            setPhotoInfo(photoObject);
        }
    }, [photoData]);

    /**
     * Fonction qui permet d'extraire les données de chaques photos dans un tableau
     * @param {array} array 
     * @returns {array}
     */
    function extractPhotoData(array) {
        const photoObject = array.map(photo => ({
            url: import.meta.env.VITE_REACT_APP_URL + photo.attributes.src.data[0].attributes.url,
            legend: photo.attributes.Legend,
            id: photo.id
        }));
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
