import "./Gallery.css";
import http from "./../../services/http.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PhotoContainer from "../../components/photoContainer/photoContainer.jsx";

function Gallery() {

    // -- Déclaration de state --//
    const [ photoData, setPhotoData ] = useState([]);
    const [ photoInfo, setPhotoInfo ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    // -- Extraction de l'id via l'URL --//
    const { id } = useParams();
    const convertingIdNumber = parseInt(id);
    const categoryTitle = new URLSearchParams(window.location.search).get("categoryTitle"); // Appel API en méthode "GET" pour récupérer les photos de la sous-catégorie

    useEffect(() => {   // Appel API en méthode "GET" pour récupérer les photos de la sous-catégorie
        http.get("/api/subcategories?populate[0]=photos.src")
            .then(({ data }) => {
                const loadedData = findDataById(convertingIdNumber, data.data);
                setPhotoData(loadedData);

                if (loadedData.length > 0) {
                    const photoObject = extractPhotoData(loadedData);
                    setPhotoInfo(photoObject);
                }

                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Erreur lors du chargement des données:', error);
                setIsLoading(false);
            });
    }, [id]);

    /**
     * Fonction permettant de comparer l'id de l'url avec l'id des sous-catégories
     * @param {number} id 
     * @param {array} data 
     * @returns {Object}
     */
    function findDataById(id, data) {
        const foundItem = data.find((item) => item.id === id);

        if(foundItem) {
            const photoArray = foundItem.attributes.photos.data
            return photoArray;
        }else {
            console.log("Aucune photos trouvées.");
        }
    }

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
            <main className="gallery-main">
                <div className="container-gallery-title">
                    <h1 id="gallerytitle" className="gallery-title"><span>{categoryTitle}</span></h1>
                </div>
                <PhotoContainer data={photoInfo} />
            </main>
        </>
    )
}
export default Gallery;
